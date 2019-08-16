const rp = require('request-promise');
const requestOptions = {
    method: 'GET',
    uri: 'https://sandbox-api.coinmarketcap.com/v1/exchange/listings/latest',
    qs: {
        'start': '1',
        'limit': '2',
        'sort': 'volume_24h_adjusted',
        'sort_dir': 'desc'
    },
    headers: {
        'X-CMC_PRO_API_KEY': 'ec9fe84b-fe7c-4d71-8aea-154b9acc0bca'
    },
    json: true,
    gzip: true
};

rp(requestOptions).then(response => {
    console.log('API call response:', response);
}).catch((err) => {
    console.log('API call error:', err.message);
});