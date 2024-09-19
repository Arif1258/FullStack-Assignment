let person1 = {
    name: 'Arif',
    age: 30,
    greet: function() {
      document.getElementById('result').innerHTML = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };

// Define another object
let person2 = {
  name: 'Asif',
  age: 25
};

// Demonstrate the use of this keyword
person1.greet(); // Output: Hello, my name is Arif and I am 30 years old.

// Demonstrate the use of call() method
person1.greet.call(person2); // Output: Hello, my name is Asif and I am 25 years old.

// Demonstrate the use of apply() method
person1.greet.apply(person2); // Output: Hello, my name is Asif and I am 25 years old.

// Demonstrate the use of bind() method
let boundGreet = person2.greet.bind(person1);
boundGreet(); // Output: Hello, my name is Asif and I am 25 years old.
