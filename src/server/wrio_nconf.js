const path = require('path');
const nconf = require('nconf');

nconf.env().argv();

var basedirPath = path.dirname(require.main.filename); // won't work with unit tests

if (process.env.WRIO_CONFIG) {
    nconf.file(path.resolve(__dirname, `../../${process.env.WRIO_CONFIG}`));
} else {
    nconf.file(path.resolve(__dirname, '../../config.json'));
}

console.log("Sample configuration loaded");

module.exports = nconf;