const chai = require(`chai`);
const spies = require(`chai-spies`)
chai.use(spies)
const expect = chai.expect;

const reverseString = require(`../reverseString`);

describe(`reverseString()`,function(){
    const consoleSpy = chai.spy.on(console, 'log');
    it(`should print string in reverse`,function(){
        let string = "1234";
        let result = reverseString(string);
        expect(consoleSpy).on.nth(1).be.called.with(`4321`);
    });
    it(`If an exception is thrown, catch it and print the contents of the exception`, function(){
        let notString = Number(1234);
        let result = reverseString(notString);
        expect(consoleSpy).on.nth(2).be.called.with(`s.split is not a function`);
        expect(consoleSpy).on.nth(3).be.called.with(notString);
    })
})
