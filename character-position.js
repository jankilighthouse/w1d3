var phrase = "lighthouse in the house";

function countLetters(string) {
  var total = {};

  for (var letter in string) {
    total[string[letter]] = ((total[string[letter]] || []) || []);
    total[string[letter]].push(Number(letter));

  }

  delete total[" "];
  return total;
}

console.log(countLetters(phrase));

