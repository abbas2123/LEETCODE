/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let count = {};

    // Build frequency map
    for (let char of s) {

        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char] = count[char] + 1;
        }
    }
console.log(count)
    // Check second string
    for (let char of t) {

        if (count[char] === undefined || count[char] === 0) {
            return false;
        }

        count[char] = count[char] - 1;
    }

    return true;

};