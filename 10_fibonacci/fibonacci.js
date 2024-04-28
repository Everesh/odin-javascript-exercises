const fibonacci = function(num) {
    if (num == 0){
        return 0;
    }
    else if (num < 0 || isNaN(num)){
        return "OOPS"
    }
    let tailing = 0;
    let leading = 1;
    for(let x = 1; x < num; x++){
        let tmp = tailing;
        tailing = leading;
        leading = tmp + leading;
    }
    return leading;
};

// Do not edit below this line
module.exports = fibonacci;
