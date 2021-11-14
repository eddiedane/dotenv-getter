require('dotenv').config()

const env = (name, defaultValue) => {
    return name in process.env ? process.env[name] : defaultValue
}

module.exports = global.env = env
