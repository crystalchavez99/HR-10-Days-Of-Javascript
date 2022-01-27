let vowels = [`a`,`e`,`i`,`o`,`u`];
function vowelsAndConsonants(s) {
    for(let letter of s){
        if(vowels.includes(letter)){
            console.log(`${letter}`);
        }
    }
    for(let letter of s){
        if(!(vowels.includes(letter))){
            console.log(`${letter}`);
        }
    }
}

module.exports = vowelsAndConsonants;
