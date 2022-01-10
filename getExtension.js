//To get the extention of a file

// 1.find the index of the(.)
// 2.slice that from the string

const getExtention = (str) => {
  return str.slice(str.lastIndexOf("."));
};

console.log(getExtention("index.html"));
console.log(getExtention("webpack.config.js"));
