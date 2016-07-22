module.exports = function (config) {
    if (undefined === config.externals) {
        config = Object.assign({externals: []}, config);
    }
    return Object.assign({}, config, {externals: config.externals.concat([{
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }])});
};
