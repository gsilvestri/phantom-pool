const MAIN_NET_ENDPOINT = 'http://phantom.api.cryptdelegate.com'; 
const MAIN_NET_NETHASH = '5e67037fd290ba7ab378e84a591d251c46eb9770eb134983771fd602233bf193';
const DEV_NET_ENDPOINT = '';
const DEV_NET_NETHASH = '';
const GET_NET_HASH_ENDPOINT = '/api/blocks/getNethash';
const TRANSACTIONS_ENDPOINT = '/api/v2/transactions';//'/peer/transactions';
const HEADER_CONTENT_TYPE = 'application/json';
const HEADER_OS = 'phantom-pool';
const HEADER_PORT = 4003;
const HEADER_VERSION = require('./package.json').version;
const PRECISION = 8;
const MESSAGE_1 = 'pool sharing - 95%: thank You for your vote';
const MESSAGE_2 = 'pool sharing: RCF';

module.exports = {
    MAIN_NET_ENDPOINT: MAIN_NET_ENDPOINT,
    MAIN_NET_NETHASH: MAIN_NET_NETHASH,
    DEV_NET_ENDPOINT: DEV_NET_ENDPOINT,
    DEV_NET_NETHASH: DEV_NET_NETHASH,
    GET_NET_HASH_ENDPOINT: GET_NET_HASH_ENDPOINT,
    TRANSACTIONS_ENDPOINT: TRANSACTIONS_ENDPOINT,
    HEADER_CONTENT_TYPE: HEADER_CONTENT_TYPE,
    HEADER_OS: HEADER_OS,
    HEADER_PORT: HEADER_PORT,
    HEADER_VERSION: HEADER_VERSION,
    PRECISION: PRECISION,
    MESSAGE_1: MESSAGE_1,
    MESSAGE_2: MESSAGE_2,
    roundDown: function (number, decimals) {
        decimals = decimals || 0;
        return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
};