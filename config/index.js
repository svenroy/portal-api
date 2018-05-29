let config = {
    "port": process.env.PORT || 3000,
    "data": {
        "questions": "api"
    }
};

const env = process.env.NODE_ENV || 'development';
const envConfig = require('./' + env);

module.exports = Object.assign(config, envConfig || {});
