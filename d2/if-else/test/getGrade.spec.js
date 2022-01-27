const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const getGrade = require(`../getGrade`);

describe(`getGrade()`, function(){
    it(` It must return the letter corresponding to the grade`,function(){
        let result = getGrade(11);
        expect(result).to.be.eql(`D`);

        result = getGrade(26);
        expect(result).to.be.eql(`A`);
    })
})
