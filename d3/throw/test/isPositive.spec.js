const isPositive = require(`../isPositive`);

const chai = require(`chai`)
const spies = require(`chai-spies`)
chai.use(spies)
const expect = chai.expect;

describe(`isPositive()`,function(){
    it(`if 0 is passed in, throw an Error`,function(){
        expect(()=> isPositive(0).to.throw(Error));
    })
    it(`if negative number is passed in, throw an Error`,function(){
        expect(()=> isPositive(-5).to.throw(Error));
    })
    it(`if positive number, the function must return the string YES`,function(){
        let result =isPositive(3);
        expect(result).to.be.eql(`YES`)
    })
})
