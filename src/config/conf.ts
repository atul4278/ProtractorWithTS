import { Config } from "protractor";
 
export let config: Config = {
    // directConnect: true,
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities:{
        browserName: "chrome",
    },
    specs: [
        '../tests/pomSpec1.js'
    ],
    jasmineNodeOpts:{
        showColors: true,
    }
}