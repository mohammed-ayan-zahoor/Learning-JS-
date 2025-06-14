
// 🔍 Intro: What is an Array?
// An Array is a special variable that can hold more than one value at a time.

// 📦 Example:

    let fruits = ["apple", "banana", "mango"];

// Each value is called an element and has an index.

// Index:     0        1        2
// Element: "apple" "banana" "mango"



// 🧪 Practice 1: Accessing Elements
// What do these return?

    let items = ["pen", "pencil", "eraser"];
    console.log(items[0]);  // 'pen'
    console.log(items[2]);  // 'eraser


// 🧪 Practice 2: Basic Array Methods
// Try running this:

    let tools = ["hammer", "wrench"];
    tools.pop();               // Remove from end
    tools.push("screwdriver"); // Add at end
    tools.shift();             // Remove from start
    tools.unshift("drill");    // Add at start
    console.log(tools);

// Output [ 'drill', 'screwdriver' ]


// 🔓 Next Micro-Goal: Intermediate Array Methods.

// We'll now explore:

// ✅ .includes()
// ✅ .indexOf()
// ✅ .slice()
// ✅ .splice()


// 🧪 Practice 3: includes + indexOf

    let devices = ["laptop", "tablet", "phone"];
    console.log(devices.includes("tablet"));  // true or false? => true
    console.log(devices.indexOf("phone"));    // what index? => 2
    console.log(devices.indexOf("desktop"));  // what if not found? => -1


// 🧪 Practice 4: slice vs splice

    let colors = ["red", "green", "blue", "yellow", "purple"];

    // slice → does not change original
    let sliced = colors.slice(1, 4); // What will this return? => Sliced: [ 'green', 'blue', 'yellow' ]

    // splice → changes the original array
    let spliced = colors.splice(2, 2); // Removes 2 items starting at index 2 => Spliced: [ 'blue', 'yellow' ]

    console.log("Sliced:", sliced);
    console.log("Spliced:", spliced);
    console.log("Colors after splice:", colors);  // => Colors after splice: [ 'red', 'green', 'purple' ]
 

// Next Target:
// 🏹 .map()
// 🧹 .filter()
// 📦 .reduce()
// 🌀 Loops for arrays: for, for...of, forEach

// ⚔️ Mini Challenge (Optional before next lesson):

    function doubleNumbers(arr) {
        // return a new array where each number is doubled
        let newArr = arr.map(numbers => numbers * 2 )
        console.log(newArr)
    }

doubleNumbers([1, 2, 3, 4, 5])






// 🔓 UNLOCKED: .map() Mastery
// Here’s what .map() is best used for:

// ✅ Changing values without mutating the original
// ✅ Creating new arrays
// ✅ Working with objects like:
//    [{name: "ayan"}, {name: "rahul"}] → ["ayan", "rahul"]


// 🎯 Micro-Challenge: Level Up .map()
// Convert this:

    let names = ["ayan", "rahul", "nina"];

// Into this:

    // ["Hello, Ayan!", "Hello, Rahul!", "Hello, Nina!"]

// Using .map() and string formatting.
// Your XP is rising, champ — keep this roll going or move to .filter() 🔍!
    
   
    let greetNames = names.map(words => {
         let capName = words.charAt(0).toUpperCase() + words.slice(1);
         return `Hello, ${capName}`
    })
    console.log(greetNames) 





// Welcome to the Array Firewall, where only the elements that pass your condition make it through.
// .filter() creates a new array with only the elements that return true for a condition.

// 🧪 Syntax:

    // let result = array.filter(element => condition);



// ⚙️ Basic Example:

    let numbers = [1, 2, 3, 4, 5, 6];
    let evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // ✅ [2, 4, 6]


// 🎯 Micro-Goals for .filter():

// ✅ Use .filter() on numbers
// ✅ Use .filter() on strings
// ✅ Use .filter() on objects
// ✅ Fix broken filters (error-first style)



// 🧪 Practice 1: Numbers Only
    // Filter only marks >= 50

    let marks = [25, 40, 85, 92, 30, 55]
    let filteredMarks = marks.filter(num => num >= 50)
    console.log(filteredMarks)



// 🧩 Practice 2: String Length Filte...

// 🧪 Challenge:

// let names = ["Ayan", "Mo", "Yuki", "Al", "Hiroshi"];
// // ➤ Filter names that are 4 or more letters long

// Expected Output:
// ["Ayan", "Yuki", "Hiroshi"]

    let sNames = ["Ayan", "Mo", "Yuki", "Al", "Hiroshi"];
    filteredNames = sNames.filter(words => words.length >= 4)
    console.log(filteredNames)

    //[ 'Ayan', 'Yuki', 'Hiroshi' ]


// 🚪 Next Door: Filtering Objects 🔍

// ⚙️ Practice 3: Object Filtering

    let users = [
    { name: "Ayan", isActive: true },
    { name: "Mo", isActive: false },
    { name: "Yuki", isActive: true },
    { name: "Al", isActive: false },
    ];

// 🎯 Challenge:
// Filter users where isActive is true
// 📦 Output should be:

// [
//   { name: "Ayan", isActive: true }, { name: "Yuki", isActive: true }
// ]


// Solution...

    let isActiveUsers = users.filter(obj => obj.isActive == true)
    console.log(isActiveUsers)

    // [ { name: 'Ayan', isActive: true }, { name: 'Yuki', isActive: true } ]
    // 🔍 Bonus: You can even write obj => obj.isActive (no need for == true) since it's already a boolean!



// 🔎.forEach() – The Array Looper
// It runs a function on every element, but doesn’t return anything.

    let fruitss = ["apple", "banana", "cherry"];
    fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
    });

// ⚠️ Used when:

// You just want to do something (like log, update DOM)
// You don't care about returning a new array

// 🎯 Mini Challenge:
// Log every name in this array with "Hi, [name]!"
    
    let forEachnames = ["Ayan", "Mo", "Yuki"];
    forEachnames.forEach((names) => {
        console.log(`Hi, ${names}`)
    })


// 🔎.reduce() – The Combo Master
    
// Used to reduce an array to a single value (sum, object, etc.)
    let numberss = [10, 20, 30];
    let total = numberss.reduce((acc, curr) => acc + curr, 0);
    console.log(total); // 60


            //********Step-by-step Execution:********//

            // Initial acc is set to
            // 0

            // First iteration: curr is
            // 10

            // acc + curr = 0 + 10 =
            // 10

            // Second iteration: curr is 
            // 20

            // acc + curr = 10 + 20 =
            // 30

            // Third iteration: curr is
            // 30

            // acc + curr = 30 + 30 =
            // 60


// ⚙️ Anatomy:
    // arr.reduce((accumulator, currentValue) => {}, initialValue);

// 🎯 Mini Challenge:
// Find the product of all numbers in this array:

    let nums = [2, 3, 4];
    let product = nums.reduce((acc, curr) => acc * curr, 1)
    console.log(product)





// 🔎.find() – First Match Finder
// Returns the first element that matches a condition. If none found, returns undefined.

    let userss = [
    { name: "Ayan", isActive: false },
    { name: "Yuki", isActive: true },
    ];

    let found = userss.find(user => user.isActive);
    console.log(found); // { name: "Yuki", isActive: true }


// 🎯 Mini Challenge:
// Find the first number greater than 50:

    let ynumbers = [12, 43, 58, 29];
    let great = ynumbers.find(nun => nun >= 50)
    console.log(great)