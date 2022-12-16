let myMap = new Map();
myMap.set("Kotya", "cat");
myMap.set("Diva", "husky");
myMap.set("Link", "germanShephard");
myMap.set("Ponchik", "rabbit");

for (let name of myMap.keys()) {
  console.log("Ключ - " + name);
}

for (let name of myMap.values()) {
  console.log("Значение - " + name);
}