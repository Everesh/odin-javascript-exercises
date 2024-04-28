const findTheOldest = function(arr) {

      return arr.slice()
                .map(item => {
                    if (!("yearOfDeath" in item)) {
                        item.yearOfDeath = (new Date()).getFullYear();
                    }
                    return item;
                })
                .sort( (a,b) => (b.yearOfDeath-b.yearOfBirth) - (a.yearOfDeath-a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
