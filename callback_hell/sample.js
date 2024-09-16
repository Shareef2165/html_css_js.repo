// Example to demonstrate call, apply, bind, closures, event loop, and callback hell

// Define an object with a method
const person = {
    name: 'John',
    greet: function (message) {
      console.log(`${message}, my name is ${this.name}`);
    },
  };
  
  // Using call, apply, and bind
  const anotherPerson = { name: 'Jane' };
  
  // Using call
  person.greet.call(anotherPerson, 'Hello'); // Output: Hello, my name is Jane
  
  // Using apply
  person.greet.apply(anotherPerson, ['Hi']); // Output: Hi, my name is Jane
  
  // Using bind
  const boundGreet = person.greet.bind(anotherPerson, 'Hey');
  boundGreet(); // Output: Hey, my name is Jane
  
  // Closure example
  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
  }
  
  const newClosure = outerFunction('outside');
  newClosure('inside'); // Output: Outer: outside, Inner: inside
  
  // Callback example
  function doSomething(callback) {
    console.log('Doing something...');
    setTimeout(() => {
      callback();
    }, 1000);
  }
  
  // Simple callback
  doSomething(() => {
    console.log('Callback executed!');
  });
  
  // Callback Hell example
  function firstFunction(callback) {
    setTimeout(() => {
      console.log('First function done');
      callback();
    }, 1000);
  }
  
  function secondFunction(callback) {
    setTimeout(() => {
      console.log('Second function done');
      callback();
    }, 1000);
  }
  
  function thirdFunction(callback) {
    setTimeout(() => {
      console.log('Third function done');
      callback();
    }, 1000);
  }
  
  // Nested callbacks - Callback Hell
  firstFunction(() => {
    secondFunction(() => {
      thirdFunction(() => {
        console.log('All functions completed.');
      });
    });
  });
  
  // Event loop demonstration
  console.log('Start');
  
  setTimeout(() => {
    console.log('Timeout callback');
  }, 0);
  
  console.log('End');
  