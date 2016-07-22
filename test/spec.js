const assert = require('assert');
const enaymeExternalsBuilder = require('..');
describe('config helpers', function () {
    describe('enzyme', function () {
        it('should add some externals in order to support enzyme', function () {
            assert.equal(enaymeExternalsBuilder({}).externals[0].cheerio, 'window');
            assert.equal(enaymeExternalsBuilder({externals:['foo']}).externals[1].cheerio, 'window');
        });
    });
});
