//match is going to search a string to match against the regular expression and returns the matches

var string1 = "My name is Deepa.Everyone call me Deepa ";

const match = (str1) => {
  return str1.match(/Deepa/g);
};
console.log(match(string1));
