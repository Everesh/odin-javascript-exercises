const reverseString = function(string) {
    let reverse = [];
    for (const letter of string) {
        reverse.unshift(letter);
    }
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
