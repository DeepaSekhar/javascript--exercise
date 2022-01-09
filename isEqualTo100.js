function isEqualTo100(num1, num2) {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    console.log("equal to 100");
    return true;
  }
  console.log("not equal to 100");
}
isEqualTo100(100, 0);
isEqualTo100(0, 100);
isEqualTo100(80, 10);
