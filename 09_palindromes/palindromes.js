const palindromes = function (str) {
    const sanitized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (sanitized.length % 2 == 0) {
        sanitized.split('').splice(sanitized.lenght/2, 1).join('');
    }
    const firstHalf = sanitized.slice(0,sanitized.lenght);
    const secondHalf = sanitized.slice(sanitized.lenght);
    if (firstHalf == secondHalf.split('').reverse().join('')) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
