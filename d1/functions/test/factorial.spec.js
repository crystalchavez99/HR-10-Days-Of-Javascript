const chai = require(`chai`)
const expect = chai.expect;

const factorial = require(`../factorial`)

describe(`factorial()`, function(){
    it(`It must return the value of n!`,function(){
        let result = factorial(4);
        expect(result).to.be.equal(24);
        result = factorial(5);
        expect(result).to.be.equal(120);
        result = factorial(2);
        expect(result).to.be.equal(2);
    })
})
