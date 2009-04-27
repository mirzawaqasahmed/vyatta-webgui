/*
    Document   : ft_language_en.js
    Created on : Mar 23, 2009, 2:18:11 PM
    Author     : Kevin.Choi
    Description:
*/

var g_lang =
{
    ///////////////////////////////////////////////////////////////////
    // General	
	m_mainOA : 'Open Appliance',
	m_mainLogin : 'Login',
	m_mainLogout: 'log out',
	m_mainUserName: 'User name',
	m_mainPassword: 'Password',
	m_mainWarning: "<p>Si vous ne poss�dez pas de login et/ou de mot de passe, contacter votre Centre Service Client<br/>" +
                   "Attention ! Pour pouvoir vous connecter au programme de configuration de l'Open Appliance, votre navigateur doit accepter les pop-up et cookies</p>",
	m_mainBLBWarning: "<p>Si vous ne poss�dez pas de login et/ou de mot de passe, contacter votre Centre Service Client<br/>" +
                   "Attention ! Pour pouvoir vous connecter au programme de configuration de la Business Livebox, votre navigateur doit accepter les pop-up et cookies</p>",				   
	m_mainWelcome: 'Welcome',
	m_mainPleaseSignIn: 'please sign in to the Open Appliance admin service',
	m_menuApp: 'Applications',
	m_menuUsers: 'Users',
	m_menuMonitor: 'Monitoring',
	m_menuBackup: 'Backup',
	m_menuConfig: 'Configuration',
	m_menuMyProfile: 'My Profile',
	m_menuDashboard: 'Dashboard',
	m_menuUpdates: 'Updates',
	m_menuUpdatePlan: 'Updates planning and history',
	m_menuRestart: 'Restart',
	m_menuRestartApp: 'Restart application or Open Appliance',
	m_menuSubscribe: 'Subscribe',
	m_menuSubcription: 'Subscription',
	m_menuUserList: 'User List',
	m_menuUserRight: 'User rights',
	m_menuHardware : 'Hardware',
	m_menuHardwareMonitor: 'Hardware monitor',
	m_menuNetwork: 'Network',
	m_menuNetworkMonitor: 'Network monitor',
	m_menuConfigBackup: 'Configuration backup',
	m_menuConfigRestore: 'Configuration restore',
	m_menuEmailServer: 'Email server',
	m_menuEmailServerConfig: 'Email server configuration',
	m_menuTimeServer: 'Time server',
	m_menuTimerServerConfig: 'Time server configuration',
	m_menuUserDir: 'User directory',
	m_menuLDAPConfig: 'LDAP server configuration',
	m_menuBLBAssocication: 'BLB association',
	m_menuPasswordPolicy: 'Password Policy',
	m_menuAddUser: 'Add user',
	m_menuUpdateUser: 'Update user',
	m_menuUpdate: 'Update',
	m_menuRestore: 'Restore',
	m_menuRestoreDesc: 'Configuration restore description',
	m_menuBLBCredCheck: 'BLB credentials check',
	m_menuContact: 'contact',
	m_menuSitemap: 'site map',
	m_menuCopyRight: 'Copyright France Telecom',

    ///////////////////////////////////////////////////////////////////
    // Calendar
	m_calToday : "aujourd'hui",
	m_calClear : 'Clear',
	m_calArrMonthNames : ['janv.', 'fevr.', 'mars', 'avril', 'mai', 'juin', 'juil', 'ao�t', 'sept.', 'oct.', 'nov.', 'dec.'],
    m_calArrWeekInits : ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    m_calInvalidDateMsg : "La date d'entr�e n'est pas valide.\n",
    m_calOutOfRangeMsg : "La date d'entr�e est hors de port�e.",
    m_calDoesNotExistMsg : "La date d'entr�e n'existe pas.",
    m_calInvalidAlert : ["Date incorrecte (", ") ignor�."],
    m_calDateDisablingError : ["Erreur ", " la date n'est pas un objet."],
    m_calRangeDisablingError : ["Erreur ", " devrait �tre compos� de deux �l�ments."],
    m_calDateDisplayFormat : 'dd-mm-yy',
    m_calDateOutputFormat : 'DD/MM/YYYY',
    //Set it to: 0 (Zero) for Sunday, 1 (One) for Monday etc..	
    m_calWeekStart : 1,		
	
    ///////////////////////////////////////////////////////////////////
    // Dash board screen

    // dashboard header
    m_dbHdApplication : 'Application',
    m_dbHdStatus : 'Status',
    m_dbHdCPU : 'CPU',
    m_dbMemory : 'Memory',
    m_dbDiskSpace : 'Disk Space',
    m_dbUpdateNeeded : 'Update Needed',
    m_dbTooltipUpdateNeed : 'Version to be updated - ',
    m_dbTooltipCancel : 'Reset selection',
    m_dbTooltipUpdate : 'Update selected VM(s)',
    m_dbUsed : "Used",
    m_dbTotal : "Total",
    m_dbFree : "Free",
    m_dbStatusUp : "Status is Up",
    m_dbStatusDown : "Status is Down",
    m_dbStatusUnknown : "Status is Unknown",

    ///////////////////////////////////////////////////////////////////
    // VM Update & History screen
    m_uhHdData : "Date",

    ///////////////////////////////////////////////////////////////////
    // VM Update Restore
	m_resUpdateVmName : "vm nom",		
	m_resUpdateCurVer: "Version actuelle",
	m_resUpdatePrevVer: "version pr�c�dente",
	m_resUpdateFail: "Restore a �chou�:",	

    ///////////////////////////////////////////////////////////////////
    // VM Schedule Update
	m_schedUpdateSched: "S'il vous pla�t le calendrier de mise � jour pour les applications suivantes",		
	m_schedUpdateNow: "Now",
	m_schedUpdateLater: "Ult�rieure",
	m_schedUpdateNewVer: "nouvelle version",
	m_schedUpdateRangeChk: "vous planifiez six mois � venir",
	m_schedUpdateDate: "Tableau date",
	m_schedUpdateHour: "Tableau heure",
	m_schedUpdateMinute: "Tableau minute",
	m_schedUpdateErrorOccur: "Les erreurs suivantes se produisent lorsque nous tentons de pr�voir une mise � jour:",


    ///////////////////////////////////////////////////////////////////
    // VM Restart screen

    ///////////////////////////////////////////////////////////////////
    // Subscribe screen
    m_subscribePlease : "S'il vous pla�t cliquer sur le texte suivant pour installer / supprimer une application",
	m_subscribeInstall: "Installer une nouvelle application",
	m_subscribeRemove: "Supprimer une nouvelle application",

    ///////////////////////////////////////////////////////////////////
    // User List screen
    m_ulTooltipAddUser : 'Create new user account',
    m_ulDeleteHeader : 'Delete User Account',

    ///////////////////////////////////////////////////////////////////
    // User Right screen

    ///////////////////////////////////////////////////////////////////
    // User Add screen
    m_userUsername: "utilisateur",
	m_userSurname: "nom",
	m_userGivenName: "pr�nom",
	m_userEmail: "e-mail",

    ///////////////////////////////////////////////////////////////////
    // User Editor screen
    m_userResetPasswd: "R�initialiser le mot de passe",
    m_userResetPasswdConfirm: "�tes-vous s�r de vouloir r�initialiser le mot de passe pour cet utilisateur?",
	m_userConfirmation: "confirmation",
	m_userResetPasswdSuccess: "Mot de passe r�initialis� avec succ�s",
	m_userResetPasswdComplete: "R�initialiser le mot de passe achev�",

    ///////////////////////////////////////////////////////////////////
    // Configuration Restore Description screen
    m_confRestorDescp : 'lorem ipsum onsectetuer....',

    ///////////////////////////////////////////////////////////////////
    // Common variables
    m_login: 'Login',
    m_name: 'Name',
    m_delete: 'Delete',
    m_email: 'Email',
    m_password :'Password',

    ///////////////////////////////////////////////////////////////////
    // Buttons & Images
    m_imageDir : 'images/fr/',
	m_ok: 'ok',
	m_error: 'Erreur',
	m_info: 'Information',

    ///////////////////////////////////////////////////////////////////
    // Popup Message Dialog
    m_puSessionTimeout : 'in Fr Session Time Out',
    m_puSessionTimeoutMsg : 'For security reasons, your session is no longer active<br>Please re-login again.',

    ///////////////////////////////////////////////////////////////////
    // Login Dialog
    m_loginPrompt : "S'il vous pla�t entrer le nom d'utilisateur et mot de passe pour vous connecter.",
    m_loginError : "Erreur d'identification",
    m_loginUnableToLogin : "Impossible de se connecter: ",
	m_loginContactCS : "Si vous n'avez pas de nom d'utilisateur et votre mot de passe, contactez votre Centre de Service � la client�le.",
	m_loginEnableJS: "Attention: pour se connecter � l'Open Appliance programme, votre navigateur doit accepter les pop-ups et les cookies.",

    ///////////////////////////////////////////////////////////////////
    // Mainframe
	m_mainFrmGuest : "visiteur",
    m_mainFrmWelcome : "salut",	
	m_mainFrmConnected: "vous �tes connect� � l'Open Appliance service admin",
	m_mainFrmSignIn: "s'il vous pla�t vous connecter � l'Open Appliance service admin",

    ///////////////////////////////////////////////////////////////////
    // My Form
	m_formNoEmpty : "ne peut pas �tre vide",		
	m_formFixError: "S'il vous pla�t corriger les erreurs suivantes:",
	m_formInvalid: "est invalide",
	m_formSave : "sauv�",

    ///////////////////////////////////////////////////////////////////
    // My Profile
	m_myprofLogin : "Login",
	m_myprofOldPasswd : "Ancien mot de passe",		
	m_myprofNewPasswd : "Nouveau mot de passe",
	m_myprofConfirmPasswd : "Confirmer le mot de passe",	
	m_myprofNPWnotCPW : "Nouveau mot de passe ne correspond pas � confirmer le mot de passe",
	m_myprofPasswdRestSucessful: "R�initialisation de mot de passe avec succ�s",	
	m_myprofResetPasswdDone: "R�initialiser le mot de passe achev�",


    ///////////////////////////////////////////////////////////////////
    // Backup configuration
	m_backupConfig : "Config.",
	m_backupData : "Data",	
	m_backupApp : "Application",	
	m_backupSelectOne: "S'il vous pla�t choisir au moins une application de sauvegarde",		
	m_backupFail: "Pas de sauvegarde",
	m_backupInProgress: "Sauvegarde est en cours. Vous recevrez une notification par email lors de l'op�ration est finshed",
	m_backupThereR: "Il ya",
	m_backupPlsDelete: "sauvegarde d�j� stock�es sur l'Open Appliance. S'il vous pla�t supprimer le plus ancien et essayez � nouveau",
	m_backupMyPC: "Mon PC",	

    ///////////////////////////////////////////////////////////////////
    // Restore configuration
    m_restoreHdContent : 'Content',
    m_restoreHdRestore : 'Restore',
    m_restoreHdDownload : 'Download',
    m_restoreHdDelete : 'Delete',

    ///////////////////////////////////////////////////////////////////
    // Restore Desc. configuration
    m_resDescHdConf : 'Config.',
    m_resDescHdData : 'Data',

    ///////////////////////////////////////////////////////////////////
    // BLB configuration
	m_blbStandAloneOA : "Autonome Open Appliance",
	m_blbAssociation : "BLB association",		
	m_blbComplete : "BLB association a termin� avec succ�s",

    ///////////////////////////////////////////////////////////////////
    // Email Server configuration
	m_emailSmtpAddr : "Adresse de serveur SMTP",
	m_emailLocalMachName : "Nom de la machine locale",
	m_emailLocalEmail : "Local e-mail",
	m_emailAuthName : "Autorisation de nom",
	m_emailAuthPasswd : "Autorisation de mot de passe",
	m_emailSrvConfig : "Envoi de la configuration du serveur",

    ///////////////////////////////////////////////////////////////////
    // LDAP Server configuration
	m_ldapSrvLoc : "Serveur LDAP",	
	m_ldapInOA : "Dans l'Open Appliance",
	m_ldapInLan : "Dans la compagnie LAN",
	m_ldapSrvAddr: "Adresse du serveur",
	m_ldapUsrUpdateRt : "Utilisateur (mise � jour des droits)",
	m_ldapUsrReadRt: "Utilisateur (lire droits)",
	m_ldapPasswdUpdateRt: "Mot de passe (mise � jour des droits)",
	m_ldapPasswdReadRt: "Mot de passe (lecture des droits)",

    ///////////////////////////////////////////////////////////////////
    // Password Policy configuration
	m_passwdPolicyChangeAtLogin : "L'utilisateur doit changer son mot de passe lors de la premi�re connexion",	
	m_passwdPolicyCanKeep : "L'utilisateur peut conserver hsi mot de passe par d�faut",	

    ///////////////////////////////////////////////////////////////////
    // NTP server configuration
	m_ntpSrvAddr : "Adresse de serveur NTP",
	m_ntpTimeSrvAddr : "Adresse du serveur de temps",
	m_ntpTimeSrvConfig: "Le temps de configuration du serveur",

    /////////////////////////////////////////
    // plesae do not edit beyound dummy
    dummy : ''
}