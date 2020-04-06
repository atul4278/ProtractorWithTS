import { Config, utils } from "protractor";
 
export let config: Config = {
    directConnect: true,
    // seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities:{
        browserName: "chrome",
        // chromeOptions: {
        //     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        //   }
    },
    specs: [
        '../tests/pomSpec1.js'
    ],
    jasmineNodeOpts:{
        showColors: true,
    },
    onPrepare: function() {
        const Jasmine2HTMLReporter = require('../node_modules/protractor-jasmine2-html-reporter');
        const winston = require('../node_modules/winston');

        const reporter = new Jasmine2HTMLReporter({
            savePath: './reports/',
            screenshotsFolder: '../../reports/images',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        })
        
        jasmine.getEnv().addReporter(reporter)
    }
}