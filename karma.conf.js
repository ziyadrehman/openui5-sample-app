module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ['ui5'],

		ui5: {
			url: "https://openui5nightly.hana.ondemand.com"
		},

		browsers: ['Chrome'],

		browserConsoleLogOptions: {
			level: "error"
		}

	});
};
