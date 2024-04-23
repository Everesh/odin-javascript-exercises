const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let output = "";
    for (let x = 0; x < num; x++){
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
