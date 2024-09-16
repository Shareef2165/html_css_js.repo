
console.log("1.Using Object.create():")

const aboutData = {
    greet:function(){
            return `Hello, my is ${this.name}`; // {this.name} is the key of this object
        }
}
const me = Object.create(aboutData);
me.name = 'Abhishek'
me.age = 21;
//===================================================================================================
console.log("2.Accessing Object Properties:")

const me = {
    name: "Abhishek",
    age:21
}
console.log(me.name);   
console.log(me["age"]);

//===============================================================================================
console.log("STATIC_METHOD")

console.log("a.Object.keys():")

const aboutMe= {
    name: "Abhishek",
    age:21
}
let aboutMeKeys = Object.keys(aboutMe);
// Expected Output: [ 'name', 'age' ]

//========================================================================================
console.log("b.Object.values():")

const aboutMe1= {
    name: "Abhishek",
    age:21
}
let aboutMeKeys1 = Object.values(aboutMe);
// Expected Output: [ 'Abhishek', 21 ]

//=================================================================================================
console.log("c.Object.assign():")

const target = {age: 21}
const source = {name: "Abhishek"}
const merged = Object.assign(target, source);
console.log(merged)

console.log(merged === target)
// Expected Output: { age: 21, name: 'Abhishek' }

//=======================================================================================================

console.log("d.Object.create():")

const me = {
    name: "Abhishek",
    eatsAppleDaily: false,
    printAbout: function(){
      console.log(`I am ${this.name}. and I ${this.eatsAppleDaily ? "eat" :"don't eat"} 
                      apple daily.`);
    }
  };

// Creating a myFriend Object inheriting from me. 
const myFriend = Object.create(me); // He is my child now😃.  

myFriend.name = "Ladoo";
myFriend.eatsAppleDaily = true;

console.log(me.printAbout());
// Expected Output: I am Abhishek. and I don't eat apple daily.
console.log(myFriend.printAbout());
// Expected Output: I am Ladoo. and I eat apple daily.
//====================================================================================================
console.log("e.Object.entries():")

const me = { name:"Abhishek", age:21 }
console.log(Object.entries(me))
// Expected output: [ [ 'name', 'Abhishek' ], [ 'age', 21 ] ]

//==========================================================================================
console.log("f.Object.fromEntries():")

const me = [ [ 'name', 'Abhishek' ], [ 'age', 21 ] ]
console.log(Object.fromEntries(me))
// Expected output: { name: 'Abhishek', age: 21 }

//==============================================================================================

console.log("g.Object.freeze():")

const me = { name:"Abhishek", age:21 }
Object.freeze(me); // Freezing the object
me.name = "scorcism";
me.age = 22;
console.log(me) 
// Expected output: { name: "Abhishek", age: 21 }

//====================================================================================================
console.log("h.Object.isFrozen():")

const me = { name:"Abhishek", age:21 }
Object.freeze(me); 
console.log(Object.isFrozen(me))
// Expected output: true

//===================================================================================================

console.log("h.Object.seal():")

const me = { name:"Abhishek", age:21 }
Object.seal(me); 
me.name = "scorcism"; // This change will be affected 
delete me.age; // This deleting will not take effect
console.log(me)
// Expected Output: { name: 'scorcism', age: 21 }

//========================================================================================================
console.log("I.Object.isSealed():")

const me = { name:"Abhishek", age:21 }
     Object.seal(me);   
     console.log(Object.isSealed(me));
     // Expected output: true
//=============================================================================================================












