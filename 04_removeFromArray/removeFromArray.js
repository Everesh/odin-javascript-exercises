const removeFromArray = function(arr, ...exclude) {
    let output = [];
    for (const position of arr) {
        if (!exclude.includes(position)) {
            output.push(position);            
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
