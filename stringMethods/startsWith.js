//is going to check whether the string begins with specified character and returns T/F

var string1 = "My name is Deepa ";
const startsWith = (str1) => {
  console.log(str1.startsWith("is"));
  return str1.startsWith("My");
};
console.log(startsWith(string1));

// o / p;
// false;
// true;
