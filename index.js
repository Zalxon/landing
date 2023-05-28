require('@babel/register')({
    // presets: ['@babel/preset-env'],
    ignore: ['node_modules', '.next'],
});
const { setConfig } = require('next/config');
setConfig(require('./next.config'));

require('./server');
