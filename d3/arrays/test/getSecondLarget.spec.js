const chai = require(`chai`)
const spies = require(`chai-spies`)
chai.use(spies);
const expect = chai.expect;

const getSecondLargest = require(`../getSecondLargest`);

describe(`getSecondLargest()`,function(){
    it(`return the second largest number`,function(){
        let nums = [2,3,6,6,5];
        let result = getSecondLargest(nums);
        expect(result).to.be.equal(5);
    })
})
