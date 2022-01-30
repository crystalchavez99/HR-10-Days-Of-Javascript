function isPositive(a) {
    if(a > 0){
        return `YES`
    }else if(a < 0){
        throw Error(`Negative Error`)
    }else{
        throw Error(`Zero Error`)
    }
}

module.exports = isPositive;
