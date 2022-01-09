// searches a string for a specified value or regular expression and
// returns a new string where the specified values are

var string1 = "My name is Deepa ";
const replace = (str1) => {
  return str1.replace("Deepa", "DEEPA");
};
console.log(replace(string1));

// o/p=>My name is DEEPA
