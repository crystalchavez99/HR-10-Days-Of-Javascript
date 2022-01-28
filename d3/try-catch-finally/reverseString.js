function reverseString(s) {
    try{
    s = s.split(``).reverse().join(``);
    }
    catch{
        console.log(`s.split is not a function`);
    }finally{
        console.log(s)
    }
}

module.exports = reverseString;
