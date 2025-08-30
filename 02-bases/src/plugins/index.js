const { getUUID } = require("./get-id.plugin");
const { getAge } = require("./get-age.plugin");

const {http} = require('../plugins/http-client');

module.exports = {
    getAge,
    getUUID,
    http,
}