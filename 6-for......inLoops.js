
// 🧪 When to use what?

// | Loop Type  | Use Case                                 |
// | ---------- | ---------------------------------------- |
// | `for`      | Full control with indexes                |
// | `for...of` | Looping through array values (BEST)      |
// | `for...in` | Looping through object keys (not arrays) |


// Time to unleash the power of "for...in" the way it is meant to be used — with objects 💼⚙️

// 💡 Imagine This Object:

    let user = {
        name: "Ayan",
        age: 21,
        language: "JavaScript"
    };


// 🧪 Looping Through Keys using for...in

    for (let key in user) {
    console.log(`${key} → ${user[key]}`);
    }

    // 🧾 Output:

    // name → Ayan
    // age → 21
    // language → JavaScript

// 🧠 Explanation:

// | Concept     | Value                                        |
// | ----------- | -------------------------------------------- |
// | `key`       | `"name"`, `"age"`, `"language"` (as strings) |
// | `user[key]` | Grabs the value associated with each key     |

// This is exactly what for...in was designed for – looping through keys in an object.

// ⚔️ Mini XP Challenge:

    let laptop = {
        brand: "ASUS",
        ram: "16GB",
        price: "₹75,000"
    };

    // Loop it with for...in and log: "brand is ASUS" etc.

    for(let key in laptop){
        console.log(`${key} is ${laptop[key]}`)
    }

//OuPut: 

    // brand is ASUS
    // ram is 16GB
    // price is ₹75,000

//-----------------------------------------------------------------------------------------------------//

// ⚔️ 🧠 Time for the Next Boss Trio:

// Let’s unlock the JavaScript Object Triple Threat:

// 🔑 Object.keys() – get all keys
// 📦 Object.values() – get all values
// 🧾 Object.entries() – get key-value pairs (as arrays)

let users = {
    name: "Ayan",
    role: "Dev",
    level: "Pro"
};

// 1️⃣ Object.keys(user)
console.log(Object.keys(user)); 
    // Output: ["name", "role", "level"]
    
    // 2️⃣ Object.values(user)
    console.log(Object.values(user)); 
    // Output: [ 'Ayan', 21, 'JavaScript' ]

    // 3️⃣ Object.entries(user)
    console.log(Object.entries(user)); 
    // Output: [["name", "Ayan"], ["role", "Dev"], ["level", "Pro"]]
    
    
//-----------------------------------------------------------------------------------------------------//

// 🎯 Challenge 2:
// Use Object.entries() with a loop to print:

    // name → Ayan
    // role → Dev
    // level → Pro

    for(let [key, values] of Object.entries(users)){
        console.log(`${key} → ${values}`); 
    }


// 🧪 Next Micro Challenge:

// "ASUS has 16GB RAM and costs ₹75,000"
    let laptops = {
        brand: "ASUS",
        ram: "16GB",
        price: "₹75,000"
    };

    let val = []

    let details = ""
    for (let [key, value] of Object.entries(laptop)) {
        val.push(value) 
    }
    console.log(val);

    let result = ` ${val[0]} has ${val[1]} RAM and costs ${val[2]}`
    console.log(result)

// 🧠 Tip: This is useful when the keys aren’t predictable, like coming from a user or API.


