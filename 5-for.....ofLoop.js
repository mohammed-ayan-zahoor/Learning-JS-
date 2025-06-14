
// 🔄 What is for...of?

// for...of is used to loop through elements in something you can iterate over, like an array or a string.

// In other words:
    // It gives you each item directly, without worrying about the index!

// 🧠 But what’s iterable?
// Things like:

// Arrays (["apple", "banana"])
// Strings ("Ayan")
// NodeLists (from the DOM)
// Maps, Sets...

// All these are collections of items, and "for...of" is your chill assistant that just hands you each item one by one 😎

// 📦 Basic Syntax:

    // for (let item of iterable) {
    // // Do something with item
    // }

// 👇 See it in action:


    let fruits = ["apple", "banana", "mango"];

    for (let fruit of fruits) {
    console.log(fruit);
    }
    //OutPut: 

    //apple
    // banana
    // mango

// No messy fruits[i], no length checking — just direct access to each item!


// 🔤 Loop through string

    let name = "Ayan";

    for (let letter of name) {
    console.log(letter);
    }

    //OutPut: 
    // A
    // y
    // a
    // n

// You’re looping through each letter like it’s an array of characters!


// ⚠️ Common Confusion (vs for...in)

// for...of → used for values
// for...in → used for keys or indices (more on that later)


// 🧪 Test Your Understanding

// 1. What will this output?

    let lang = "Java";
    for (let char of lang) {
    console.log(char.toUpperCase());
    }

// Solution...

    // J
    // A
    // V
    // A


// What’s the difference between this:

    // for (let fruit of fruits)
// and this:
    // for (let i = 0; i < fruits.length; i++)

// 🚨 Here's the key difference:

// ✅ for...of:
// Directly gives you each element in the array.
// Cleaner and easier when you don’t need the index.


// ❗ for (let i = 0; i < arr.length; i++):
// Gives you the index, so you can use arr[i]
// More flexible if you need to know the position or modify the array

// 💡 So the summary:

// | Feature     | `for...of`          | Classic `for` loop         |
// | ----------- | ------------------- | -------------------------- |
// | Access      | Direct value        | Index then value           |
// | Use when    | Just looping values | Need index or modify array |
// | Cleanliness | Cleaner             | More flexible              |


// 🧪 Mini Practice:
// Loop through ["html", "css", "js"] using both for...of and classic for loop and print:

    // I love html
    // I love css
    // I love js

    a = ["html", "css", "js"]

    for(words of a){
        console.log(`I love ${words}`)
    }

// ⚔️ XP Challenge:
// Now try the for...in version and see what it gives you.

    for(words in a){
        console.log(`I love ${a[words]}`)
    }

