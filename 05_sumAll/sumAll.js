const sumAll = function(num1, num2) {
    if ( typeof(num1) != typeof(num2) || typeof(num1) != 'number'){
        return "ERROR";
    }
    else if (num1 > num2) {
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }

    if (num1 < 0) {
        return "ERROR";
    }
    
    let sum = 0;
    while (num1 <= num2) {
        sum += num1;
        num1++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
