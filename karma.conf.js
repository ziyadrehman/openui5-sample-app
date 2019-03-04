module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ['ui5'],

		browsers: ['Chrome'],

		browserConsoleLogOptions: {
			level: "error"
		},

		// FIXME: Serve testrunner.html from CDN as it's not part of the npm dependencies (no test-resources)
		proxies: {
			"/base/webapp/test-resources/sap/ui/qunit/": {
				target: "https://openui5nightly.hana.ondemand.com/test-resources/sap/ui/qunit/",
				changeOrigin: true
			}
		},

	});
};
