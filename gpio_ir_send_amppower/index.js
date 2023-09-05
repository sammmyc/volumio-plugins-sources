'use strict';

var libQ = require('kew');
var fs=require('fs-extra');
var config = new (require('v-conf'))();
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

// Initial setup - operate the power function simply by using an exec string...
const SYSTEM_POWER_CYCLE = "/usr/bin/sudo /usr/bin/irsend --count=2 SEND_ONCE LG_AKB36086202_for_MCD23 KEY_POWER";
const SYSTEM_VOLUME_UP = "/usr/bin/sudo /usr/bin/irsend --count=2 SEND_ONCE LG_AKB36086202_for_MCD23 KEY_VOLUMEUP";
const SYSTEM_VOLUME_DOWN = "/usr/bin/sudo /usr/bin/irsend --count=2 SEND_ONCE LG_AKB36086202_for_MCD23 KEY_VOLUMEDOWN";

module.exports = gpioIrSendAmppower;
function gpioIrSendAmppower(context) {
	var self = this;

	this.context = context;
	this.commandRouter = this.context.coreCommand;
	this.logger = this.context.logger;
	this.configManager = this.context.configManager;

}



gpioIrSendAmppower.prototype.onVolumioStart = function()
{
	var self = this;
	var configFile=this.commandRouter.pluginManager.getConfigurationFile(this.context,'config.json');
	this.config = new (require('v-conf'))();
	this.config.loadFile(configFile);

    return libQ.resolve();
}

gpioIrSendAmppower.prototype.onStart = function() {
    var self = this;
	var defer=libQ.defer();


	// Once the Plugin has successfull started resolve the promise
	defer.resolve();

    return defer.promise;
};

gpioIrSendAmppower.prototype.onStop = function() {
    var self = this;
    var defer=libQ.defer();

    // Once the Plugin has successfull stopped resolve the promise
    defer.resolve();

    return libQ.resolve();
};

gpioIrSendAmppower.prototype.onRestart = function() {
    var self = this;
    // Optional, use if you need it
};


// Configuration Methods -----------------------------------------------------------------------------

gpioIrSendAmppower.prototype.getUIConfig = function() {
    var defer = libQ.defer();
    var self = this;

    var lang_code = this.commandRouter.sharedVars.get('language_code');

    self.commandRouter.i18nJson(__dirname+'/i18n/strings_'+lang_code+'.json',
        __dirname+'/i18n/strings_en.json',
        __dirname + '/UIConfig.json')
        .then(function(uiconf)
        {
            defer.resolve(uiconf);
        })
        .fail(function()
        {
            self.logger.error('Failed to parse UI Configuration page for plugin Sams test plugin XXX: ' + error);
			defer.reject(new Error());
        });

    return defer.promise;
};

gpioIrSendAmppower.prototype.getConfigurationFiles = function() {
	return ['config.json'];
}

gpioIrSendAmppower.prototype.setUIConfig = function(data) {
	var self = this;
	//Perform your installation tasks here
};

gpioIrSendAmppower.prototype.getConf = function(varName) {
	var self = this;
	//Perform your installation tasks here
};

gpioIrSendAmppower.prototype.setConf = function(varName, varValue) {
	var self = this;
	//Perform your installation tasks here
};




// Spop pause
gpioIrSendAmppower.prototype.pause = function() {
	var self = this;
	self.commandRouter.pushConsoleMessage('[' + Date.now() + '] ' + 'gpioIrSendAmppower::pause');


};

// Get state
gpioIrSendAmppower.prototype.getState = function() {
	var self = this;
	self.commandRouter.pushConsoleMessage('[' + Date.now() + '] ' + 'gpioIrSendAmppower::getState');


};

//Parse state
gpioIrSendAmppower.prototype.parseState = function(sState) {
	var self = this;
	self.commandRouter.pushConsoleMessage('[' + Date.now() + '] ' + 'gpioIrSendAmppower::parseState');

	//Use this method to parse the state and eventually send it with the following function
};

// Announce updated State
gpioIrSendAmppower.prototype.pushState = function(state) {
	var self = this;
	self.commandRouter.pushConsoleMessage('[' + Date.now() + '] ' + 'gpioIrSendAmppower::pushState');

	return self.commandRouter.servicePushState(state, self.servicename);
};


gpioIrSendAmppower.prototype.explodeUri = function(uri) {
	var self = this;
	var defer=libQ.defer();

	// Mandatory: retrieve all info for a given URI

	return defer.promise;
};


gpioIrSendAmppower.prototype.goto=function(data){
    var self=this
    var defer=libQ.defer()

// Handle go to artist and go to album function

     return defer.promise;
};
