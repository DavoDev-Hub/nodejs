const { getUUID } = require("./get-id.plugin");
const { getAge } = require("./get-age.plugin");

const {http} = require('./http-client');
const buildLogger = require('../plugins/logger.plugin');
    
module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger,
}