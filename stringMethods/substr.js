// kind of slice .It is going to extract the character from a string begining at a specified start position and
// through the nuber of characters(.substr(2,4)=>index[2],4 characters)

var string1 = "My name is Deepa ";
const substr = (str1) => {
  return str1.substr(4, 2);
};
console.log(substr(string1));

// o/p=>am
