let arr = ["cat", "dog", "fish"];
let allElemSame = arr.every(item => {
  return item === "cat"
})
console.log(allElemSame);