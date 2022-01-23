const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const performOperation = require(`../performOperation`);

describe(`performOperation`, function(){
    it(`should print sum of int line 1, sum of dec line 2, print string concat line 3`,function(){
        const consoleSpy = chai.spy.on(console, 'log');
        let method = performOperation(12,4.32,`is the best place to learn and practice coding!`);
        expect(consoleSpy).on.nth(1).be.called.with(16);
        expect(consoleSpy).on.nth(2).be.called.with(8.32);
        expect(consoleSpy).on.nth(3).be.called.with('HackerRank is the best place to learn and practice coding!');
    })
})
