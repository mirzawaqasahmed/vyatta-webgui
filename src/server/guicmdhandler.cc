/**
 * Module: guicmdhandler.cc
 *
 * Author: Michael Larson
 * Date: 2009
 */
#include <string.h>
#include <iostream>
#include <string>
#include <vector>
#include "rl_str_proc.hh"
#include "common.hh"
#include "guicmdhandler.hh"

using namespace std;

/**
 *
 *
 **/
WebGUI::Error
GUICmdHandler::process()
{
  string cmd = string(_msg._request);
  //parse the command and data segments
  size_t start_pos = cmd.find("<handler>");
  if (start_pos == string::npos) {
    return WebGUI::COMMAND_ERROR;  
  }
  size_t end_pos = cmd.find("</handler>");
  if (start_pos == string::npos) {
    return WebGUI::COMMAND_ERROR;  
  }
  string command = cmd.substr(start_pos+9,end_pos-start_pos-9);

  if (command.empty()) {
    //return error
    _resp = WebGUI::ErrorDesc[WebGUI::COMMAND_ERROR];
    return WebGUI::COMMAND_ERROR;
  }

  //WILL ALLOW EMPTY DATA FIELDS
  start_pos = cmd.find("<data>");
  end_pos = cmd.find("</data>"); 
  string data;
  if (start_pos != string::npos && end_pos != string::npos) {
    data = cmd.substr(start_pos,end_pos - start_pos);
  }
  //parse the node.def that contains the specific command
  StrProc str_proc(command, " ");
  
  //let's piece  together the path
  string path;
  vector<string> coll = str_proc.get();
  vector<string>::iterator iter = coll.begin();
  while (iter != coll.end()) {
    path += *iter + "/";
    ++iter;
  }
  path += "node.def";


  //now read in the command
  string handler;
  string full_path = WebGUI::TEMPLATE_PROC_ROOT + "/" + path;
  FILE *fp = fopen(full_path.c_str(),"r");
  if (fp) {
    char buf[1025];
    while (fgets(buf,1024,fp) != 0) {
      if (strncmp(buf,"run:",4) == 0) {
	string tmp(buf);
	handler = tmp.substr(4,tmp.length()-4);
	break;
      }
    }
  }
  if (handler.empty()) {
    _resp = "";
    return WebGUI::SUCCESS;
  }  

  //now execute the whole kabob


  //execute
  string opmodecmd = "export " + WebGUI::OA_GUI_ENV_AUTH_USER + "=" + _msg._user + "; " + cmd;
  
  cmd = WebGUI::mass_replace(cmd,"'","'\\''");
  opmodecmd = "/bin/bash --rcfile /usr/lib/cgi-bin/vyatta-proc -i -c 'export " + WebGUI::OA_GUI_ENV_AUTH_USER + "=" + _msg._user + ";_vyatta_proc_run " + handler + " < " + data + " 2>&1'";
  
  string stdout;
  bool verbatim = false;
  
  setenv(WebGUI::OA_GUI_ENV_SESSION_ID.c_str(),_msg.id().c_str(),1);

  WebGUI::Error err;
  if (WebGUI::execute(opmodecmd,stdout,true) == 0) {
    err = WebGUI::SUCCESS;
  } else {
    err = WebGUI::COMMAND_ERROR;
  }
  
  unsetenv(WebGUI::OA_GUI_ENV_SESSION_ID.c_str());


  //set the error response
}

/**
 *
 *
 **/
std::string
GUICmdHandler::get_response_str()
{
  return _resp;
}
