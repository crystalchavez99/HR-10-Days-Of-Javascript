const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const getLetter = require(`../getLetters`);

describe(`getLetter()`, function(){
    it(` It must return the letter corresponding to the grade`,function(){
        result = getLetter(`adfgt`);
        expect(result).to.be.eql(`A`);
    })
})
