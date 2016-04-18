'use strict';

var httpolyglot = require('httpolyglot');

var bsUtil = require('browser-sync/lib/server/utils');
var bsUtilGetServer = bsUtil.getServer;
bsUtil.getServer = function(app, options) {

	if(options.get('httpolyglot')) {
		return {
			server: httpolyglot.createServer(bsUtil.getKeyAndCert(options), app),
			app
		};
	}
	return bsUtilGetServer.call(bsUtil, app, options);
};

module.exports = require('browser-sync');
