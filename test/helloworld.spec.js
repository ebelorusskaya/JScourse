const {describe, it} = require('mocha');
const { expect, use } = require('chai');
const logger = require('../utils/log.util');
const todaydate = require('../utils/datetime.util');
describe('Hello World TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
});
expect('func1', () => {
use('should show date', () => {
    todaydate.today('24.04.2019');
});
});