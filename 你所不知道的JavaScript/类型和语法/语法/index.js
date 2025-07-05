function vowels(str) {
  var matches;

  if (str && (matches = str.match(/[aeiou]/g))) {
    return matches;
  }
}

console.log(vowels("Hello World"));