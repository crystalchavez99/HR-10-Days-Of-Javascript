const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const vowelsAndConsonants = require(`../vowelsAndConsonants`);

describe(`vowelsAndConsonants()`, function(){
    it(`Print each vowel of in order on a new line, then print each consonant in order on a new line. Return nothing.`,function(){
        const consoleSpy = chai.spy.on(console, 'log');
        let string = `javascriptloops`
        let result = vowelsAndConsonants(string);
        expect(consoleSpy).on.nth(1).be.called.with(`a`);
        expect(consoleSpy).on.nth(2).be.called.with(`a`);
        expect(consoleSpy).on.nth(3).be.called.with(`i`);
        expect(consoleSpy).on.nth(4).be.called.with(`o`);
        expect(consoleSpy).on.nth(5).be.called.with(`o`);
        expect(consoleSpy).on.nth(6).be.called.with(`j`);
        expect(consoleSpy).on.nth(7).be.called.with(`v`);
        expect(consoleSpy).on.nth(8).be.called.with(`s`);
        expect(consoleSpy).on.nth(9).be.called.with(`c`);
        expect(consoleSpy).on.nth(10).be.called.with(`r`);
        expect(consoleSpy).on.nth(11).be.called.with(`p`);
        expect(consoleSpy).on.nth(12).be.called.with(`t`);
        expect(consoleSpy).on.nth(13).be.called.with(`l`);
        expect(consoleSpy).on.nth(14).be.called.with(`p`);
        expect(consoleSpy).on.nth(15).be.called.with(`s`);
    })
})
