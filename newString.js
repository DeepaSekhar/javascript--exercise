// create a new string if the given string begins with 'new'already then
// return the original string
// 1.Check if the string starts with new word using startsWith()
// 2.if True return the original string or return the origal string with a 'new' word on it

const newString = (str) => {
  if (str.startsWith("new ")) {
    return `already New! ${str}`;
  } else return "new " + str;
};
console.log(newString("Offer"));
console.log(newString("new offer"));

// o/p
// new Offer
// already New! new offer
