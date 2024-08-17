module.exports = function reverse (n) {
  let string = n.toString();
  let stringRevert = string.split("").reverse().join("");
  let numberRevert = parseInt(stringRevert, 10);
  return numberRevert;
}
