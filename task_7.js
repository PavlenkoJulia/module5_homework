let arr = [1, 2, 10, 18, 13, 17, 4];
let result1 = arr.filter(function(elem) {
  if (elem % 2 == 0) {
    return true
  } else {
    return false
  }
})
let result2 = arr.filter(function(elem) {
  if (elem % 2 == 0) {
    return false 
  } else {
    return true
  }
})
console.log(result1.length);
console.log(result2.length);