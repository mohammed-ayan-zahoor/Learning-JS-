// Understand the basic syntax and difference from traditional functions.

// 📍 STAGE 1: Fundamentals – “What the Arrow, Bro?”

// Traditional function
// function add(a, b) {
//   return a + b;
// }

//  Arrow function version
// const add = (a, b) => a + b;


// Arrow functions:

// - Are shorter.
// - Don’t have their own this, arguments, super, or new.target.
// - Can't be used as constructors.
// - Good for callbacks, bad for methods.



// fix-broken code challenge...


    // const greet = name => { "Hello, " + name };
    // console.log(greet("Ayan"));


//solution...

    const greet = name => "Hello, " + name
    console.log(greet("Ayan"))

/* there are no curly brackets in the syntax...
but if you do use braces you have to manually add return; */

    // const greet = name => {
    // return "Hello, " + name;
    // };



// 📍 STAGE 2: Arrow Functions in Real Life – “Callback City”

// 🔄 Challenge: Fix this array code


    // const numbers = [1, 2, 3, 4, 5];
    // const squared = numbers.map(num => { num * num });
    // console.log(squared); 

// Solution...

    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(num =>  num * num );
    console.log(squared); 

    //removed the braces{} or could have added a return;


// 🛠 STAGE 3: this & Arrow Functions – “Don’t Call Me, I’m Bound”

    // const user = {
    // name: "Ayan",
    // sayHi: function () {
    //     setTimeout(function () {
    //     console.log("Hi, " + this.name);
    //     }, 1000);
    // }
    // };

    // user.sayHi();

    
//  Solution...

    const user = {
    name: "Ayan",
    sayHi: function () {
        setTimeout(() => {
        console.log("Hi, " + this.name); // now 'this' refers to 'user'
        }, 1000);
    }
    };

    user.sayHi(); // 👉 Output: Hi, Ayan

// 1. function () {} creates its own this
// ✔️ Correct! Regular functions have their own this context, which in this case refers to window (in browsers) or undefined (in strict mode). That’s why this.name fails.

// 2. Arrow functions don’t create their own this
// ✔️ BANG ON! Arrow functions inherit this from the surrounding scope, so they don't break the context. They're like loyal employees that don’t file their own taxes—they just use their boss’s context. 😂
