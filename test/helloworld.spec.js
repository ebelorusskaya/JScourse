const {describe, it} = require('mocha');
//const { expect, use } = require('chai');
const logger = require('../utils/log.util')

describe('Hello Worls TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
});