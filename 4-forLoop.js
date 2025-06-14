
// 🌀 Time to tame the mighty for loop — the OG workhorse of JavaScript.

// We'll master:

// Basic for loop syntax
// Looping forward and backward
// Looping through array
// Handling conditions inside the loop
// Real-world mini-challenges
// Bonus: Nested for loops + comparison with .forEach()


// 🔁 Basic for loop

    for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
    }

    // OutPut: 
    // Count: 0
    // Count: 1
    // Count: 2
    // Count: 3
    // Count: 4

// Breakdown:

// let i = 0 → Start counter at 0
// i < 5 → Stop before hitting 5
// i++ → Increase by 1 every loop



// 🎯 Micro Challenge:
// Write a for loop that logs the numbers 1 to 10, one per line.

    for(i = 1; i <= 10; i++){
        console.log(i)
    }




// 🧠 Next Loop Challenge
// 🔁 Reverse — Log 10 to 1

    for(i = 10; i > 0; i--){
        console.log(i)
    }

//🧮 1. Sum numbers 1 to 100

    let sum = 0
    for (i = 1; i <= 100; i++){
        sum += i
        
    }

    console.log(sum) // => 5050


//🔍 2. Even/Odd identifier.

    for(i = 1; i <= 10; i++){
        if(i%2 === 0){
            console.log(`${i}, is even`)
        }
        else{
            console.log(`${i}, is odd`)
        }
    }

// 🎒 3. Loop through array of names


    let names = ["Ayan", "Yuki", "Mo", "Hiroshi"]
    for(i = 0; i < names.length; i++){
        console.log(`Hi, ${names[i]} !`)
    }

//🧠 4. Loop + condition filter (names with 4+ letters)

    let moreNames = ["Al", "Mina", "Ayan", "Jo", "Hiroshi"];
    for(i = 0; i < moreNames.length; i++){
        if(moreNames[i].length >= 4){
            console.log(moreNames[i])
        }
    
    }


//🧩 5. Mini Table: 2 x 1 = 2... up to 10

    for(i = 1; i <= 10; i++){
        console.log(`2 x ${i} = ${2 * i}`)
    }