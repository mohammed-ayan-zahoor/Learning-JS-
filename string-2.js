
// 📍 STAGE 1: String Basics – “Welcome to Type Text"
// 
// Understand what strings are, how to define them, and the basic methods.”

    let name1 = "Ayan";
    let name2 = 'Coder';
    let name3 = `Master ${name1}`; // Template literals

    console.log(name3); // Master Ayan

    // | Type             | Example            |
    // | ---------------- | ------------------ |
    // | String literal   | `"hello"`          |
    // | Template literal | `` `Hi ${name}` `` |
    // | Escape chars     | `"Line1\nLine2"`   |


// 🔧 Fix-It Challenge:

    // let message = 'I'm learning JavaScript';
    // console.log(message);


// 1. Will it throw an error?
// ✔️ Yes.

// 2. Why?
// ✔️ Because 'I'm learning...' uses single quotes, and the ' in I'm is seen as the end of the string. JavaScript gets confused and throws a SyntaxError.


// Solution...

    let message = `I'm learning JavaScript`;
    console.log(message);




// 🔥 STAGE 2: String Methods – “String-Fu Dojo”

// 🎯 Micro-Goal:
// Master the 5 core string methods:

// 1.length
// 2.toUpperCase(), .toLowerCase()
// 3.slice(start, end)
// 4.indexOf(substring)
// 5.includes(substring)

// 🧪 Practice Setup:

    let phrase = "JavaScript is Awesome";

// ⚔️ Challenge Questions:
// 1. What is the length of the string?
// 2. Turn the string into lowercase.
// 3. Extract the word "Awesome" using .slice().
// 4. What index does "is" start at?
// 5. Does the string include "java" (case sensitive)?

// 1. What is the length of the string?

    let phraseLength = phrase.length
    console.log(phraseLength)

// 2. Turn the string into lowercase.

    let phraseLower = phrase.toLowerCase();
    console.log(phraseLower)

// 3. Extract the word "Awesome" using .slice().

    let phraseSlice = phrase.slice(14)
    console.log(phraseSlice)

// 4. What index does "is" start at?

    let phraseIndex = phrase.indexOf("is")
    console.log(phraseIndex)

// 5. Does the string include "java" (case sensitive)?

    let phraseInclude = phrase.includes("java")
    console.log(phraseInclude) // false
    // yes it is case sensitive..




// 🔓 STAGE 3 – "String Master Tools"

// 🧠 Micro-goal: Learn + practice:
// | Method                          | Purpose                 |
// | ------------------------------- | ----------------------- |
// | `.replace()`                    | Replace text            |
// | `.split()`                      | Split into array        |
// | `.trim()`                       | Remove extra spaces     |
// | `.repeat()`                     | Repeat strings          |
// | `.startsWith()` / `.endsWith()` | Check prefixes/suffixes |


// ⚔️ Fix-It Challenge:

    let msg = "   Hello World!   ";
    console.log(msg.trim().replace("World", "Ayan").repeat(2));

// ❓Quiz:

// What is the final output? => Hello Ayan!Hello Ayan!
// Why does .trim() matter here? => it removes the extra space.
// What would msg.split(" ") return? => it would split in an array


// 🔍 Pro Tip:
// Use .trim() before splitting if you want a clean split:
    //msg.trim().split(" "); 
    // ["Hello", "World!"]



// 🚨 FINAL BOSS: 10-Minute Real-World String Challenge 🚨

// 🧪 Challenge:

// Create a function that:
// Takes a full name as input
// Converts it to proper case (first letter capital of each word)
// Returns "Hello, Firstname Lastname!"
// (e.g., input: "aYaN kHan" → output: "Hello, Ayan Khan!")


    function fullNamee(name){
        let words = name.trim().toLowerCase().split(" ")
        let capitalisedWords = words.map(word =>{
            return word.charAt(0).toUpperCase() + word.slice(1);
        })

        let fullName =capitalisedWords.join(" ")

        return "Hello, " + fullName + "!"
    }

    fullNamee("masAshi kUshihiro")



// 🧨 MISSION LOADED: Username Generator Challenge
// Welcome to the Dev Lab
// Objective: Convert any full name into a clean, lowercase, underscore-joined username with a random 3-digit number!

function userGen(fullName){
    let name = fullName.trim().toLowerCase().split(" ")
    let user= name.join("_")
    let randomNumber = Math.floor(Math.random() * 900 + 100)
    let userName = user + randomNumber
    return userName
}

userGen("Mohammed Ayan")