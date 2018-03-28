const uniqueString = require('../index')
const expect = require('chai').expect
describe('uniquestring.js', () => {
    it('', async () => {
       const res = await uniqueString.random(32)
       console.log(res)
       expect(res).to.be.a('string')
    });
});