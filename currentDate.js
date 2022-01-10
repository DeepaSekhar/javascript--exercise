// Print the current date in dd/mm/yy format
// 1.sendthe date of object as a function arguement
// 2.Extract the Day,month and year
// 3.display it in a certain format

const currentDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log(day, month, year);
  return `${day}/${month}/${year}`;
};

console.log(currentDate());
