const path = require('path')

exports.config = {
    /**
     * server configurations
     */
    hostname: 'localhost',
    port: 4444,
    path: '/',

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'trace',
    coloredLogs: true,
    framework: 'mocha',
    outputDir: __dirname,

    reporters: ['spec'],
    services: ['webdriver-mock'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 10000,
        compilers: ['js:@babel/register']
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000 * 60 * 3
    },

    cucumberOpts: {
        timeout: 5000,
        compiler: ['js:@babel/register'],
        require: [path.join(__dirname, '..', 'cucumber', 'step-definitions', '*.js')]
    }
}
