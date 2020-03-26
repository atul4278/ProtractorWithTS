import { Config } from "protractor";
 
export let config: Config = {
    directConnect: true,
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