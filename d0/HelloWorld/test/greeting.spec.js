const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const greeting = require(`../greeting`);

describe(`greeting()`, function(){
    it(`should print hello world and new line with passed arg`, function(){
        const consoleSpy = chai.spy.on(console, 'log');
        let method = greeting(`Welcome to 10 Days of JavaScript!`);
        expect(consoleSpy).on.nth(1).be.called.with(`Hello, World!`);
        expect(consoleSpy).on.nth(2).be.called.with(`Welcome to 10 Days of JavaScript!`);
    })
})
