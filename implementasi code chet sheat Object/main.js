// 1. Object.keys()
const person = { name: "John", age: 30, job: "Developer" };
const keys = Object.keys(person); // Mengembalikan ["name", "age", "job"]
console.log(keys);

// 2. Object.values()
const values = Object.values(person); // Mengembalikan ["John", 30, "Developer"]
console.log(values);

// 3. Object.entries()
const entries = Object.entries(person); // Mengembalikan [["name", "John"], ["age", 30], ["job", "Developer"]]
console.log(entries);

// 4. Object.assign()
const target = { name: "Alice" };
const source = { age: 25, job: "Designer" };
Object.assign(target, source); // Menggabungkan properti source ke target
console.log(target); // { name: "Alice", age: 25, job: "Designer" }

// 5. Object.freeze()
const car = { brand: "Toyota", model: "Camry" };
Object.freeze(car);
car.model = "Corolla"; // Tidak bisa mengubah properti
console.log(car.model); // Tetap "Camry"

// 6. Object.seal()
const book = { title: "1984", author: "George Orwell" };
Object.seal(book);
book.title = "Animal Farm"; // Bisa mengubah properti yang ada
book.year = 1945; // Tidak bisa menambahkan properti baru
console.log(book); // { title: "Animal Farm", author: "George Orwell" }

// 7. Object.create()
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true

// 8. Object.hasOwn()
const student = { name: "Tom", grade: "A" };
console.log(Object.hasOwn(student, "name")); // true
console.log(Object.hasOwn(student, "age")); // false

// 9. Object.getOwnPropertyDescriptors()
const obj = { prop: 42 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // { prop: {value: 42, writable: true, enumerable: true, configurable: true} }

// 10. Object.getPrototypeOf()
const proto = Object.getPrototypeOf(dog);
console.log(proto); // { eats: true }

// 11. Object.setPrototypeOf()
const anotherAnimal = { sleeps: true };
Object.setPrototypeOf(dog, anotherAnimal);
console.log(dog.sleeps); // true

// 12. Object.fromEntries()
const entriesArray = [
  ["name", "Tom"],
  ["age", 30],
  ["job", "Engineer"],
];
const newObject = Object.fromEntries(entriesArray); // Membuat objek dari array pasangan [key, value]
console.log(newObject); // { name: "Tom", age: 30, job: "Engineer" }

// 13. Object.is()
console.log(Object.is(NaN, NaN)); // true (dalam Object.is, NaN sama dengan NaN)
console.log(Object.is(+0, -0)); // false (dibedakan dalam Object.is)

// 14. Object.defineProperty()
const user = {};
Object.defineProperty(user, "name", {
  value: "Alice",
  writable: false, // Tidak dapat diubah
  enumerable: true,
  configurable: false,
});
console.log(user.name); // "Alice"
user.name = "Bob"; // Tidak berubah karena writable: false
console.log(user.name); // Tetap "Alice"

// 15. Object.defineProperties()
const obj2 = {};
Object.defineProperties(obj2, {
  name: { value: "Alice", writable: true },
  age: { value: 25, writable: false },
});
console.log(obj2); // { name: "Alice", age: 25 }
