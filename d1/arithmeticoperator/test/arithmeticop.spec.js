const chai = require(`chai`)
const expect = chai.expect;

const { getArea, getPerimeter } = require(`../arithmeticop`);

describe(`arithmetic operators`, function () {

    beforeEach = () => {
        let length;
        let width;
    }
    length = 3;
    width = 4.5

    context(`getArea()`, function () {

        it(`Calculate and return the area of a rectangle `, function () {
            let result = getArea(length, width);
            expect(result).to.be.eql(13.5)
        });
    })

    context(`getPerimeter()`, function () {

        it(`Calculate and return the perimeter of a rectangle`, function () {
            let result = getPerimeter(length, width);
            expect(result).to.be.eql(15)
        })

    })

})
