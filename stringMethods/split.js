// split is going split a string into an array of substring

var string1 = "My name is Deepa ";
const split = (str1) => {
  console.log(str1.split("is"));
  return str1.split(" ");
};
console.log(split(string1));

// o/p

// console->[ 'My name ', ' Deepa ' ]
// [ 'My', 'name', 'is', 'Deepa', '' ]
