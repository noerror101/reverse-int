module.exports = function reverse (n) {
    let a = String(Math.abs(n));
    let result =  a.split("").reverse().join("");
    return result;
}
