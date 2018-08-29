var phrase = "lighthouse in the house";

function countLetters(string) {
  var total = {};

  for (var letter in string) {
    total[string[letter]] = 0;
  }
  for (var letter in string) {
    total[string[letter]]++;
  }
  delete total[" "];
  return total;
}

console.log(countLetters(phrase));

