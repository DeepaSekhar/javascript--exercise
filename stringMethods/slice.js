// is going to extract a part of a string and returns a new string
// .slice(2,4)=>it will slice index[2] to index[4]

var string1 = "My name is Deepa ";
const slice = (str1) => {
  return str1.slice(4, 7);
};
console.log(slice(string1));

// o/p=>ame
