let x = 'true';
let result = typeof x;
if (result == 'number') {
  console.log('x = числу');
} else if (result == 'string') {
  console.log('x = строке');
} else if (result == 'boolean') {
  console.log('x = логическому типу');
} else {
  console.log('Тип x не определён');
}