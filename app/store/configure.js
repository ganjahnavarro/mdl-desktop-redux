if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configure.production'); // eslint-disable-line global-require
} else {
    module.exports = require('./configure.development'); // eslint-disable-line global-require
}
