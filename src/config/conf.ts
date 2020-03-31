import { Config } from "protractor";
 
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
    }
}