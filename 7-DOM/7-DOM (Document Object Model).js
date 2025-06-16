
// 📖 What is the DOM?
// 🧠 Imagine your HTML file is a tree.
// Each element (like <h1>, <p>, <div>) is a node on that tree.
// JavaScript can walk this tree, grab elements, change them, delete them, or add more!

    // <body>
    // <h1>Hello World</h1>
    // <p>I love JavaScript</p>
    // </body>

// 🔍 In JavaScript, we can access these like:

    document.querySelector("h1") // grabs the <h1>
    document.querySelector("p")  // grabs the <p>


// 🛠️ Your First Hands-On Practice

// 1. Open any .html file (or use CodePen/Sandbox).
// 2. Add this inside your HTML:

    // <h1 id="mainHeading">Welcome!</h1>
    // <p class="intro">This is your DOM journey.</p>

// Now add this in your <script> tag or external .js file:

    let heading = document.getElementById("mainHeading");
    console.log(heading);

    let paragraph = document.querySelector(".intro");
    console.log(paragraph);


// 🎯 Mini Practice Challenge
// 👉 In your HTML:

    // <h1 id="title">JavaScript is cool</h1>
    // <p class="desc">Learning DOM is fun</p>


// 👉 In JavaScript:

// 1.Select both elements.
// 2.Log them.
// 3.Change the <h1> text to "Mastering the DOM!"

// solution...

    // let title = document.getElementById("title")
    // console.log(title)

    // let desc = document.querySelector(".desc")
    // console.log(desc)

    // title.innerText = "Mastering the DOM" //changes the inner text of an element

// 💡 Bonus Insight:

    // Want to change the style of an element?

    // title.style.color = "crimson";
    // desc.style.fontWeight = "bold";


// 💥 DOM Styling — Level 2

// Welcome to the Visual Warfare Unit, You're now learning how to dress your DOM like a pro. Let’s roll with style-changing power!

// 🎯 Objective: Change styles using JavaScript

// We'll work with .style to tweak fonts, colors, sizes — all live in the browser

// 🧪 Example HTML:

    // <h2 id="highlight">DOM Styling is Fun!</h2>
    // <p id="note">Watch this text transform with JS.</p>

// 🧠 JavaScript Time:

    // let highlight = document.getElementById("highlight");
    // let note = document.getElementById("note");

    // highlight.style.color = "tomato";
    // highlight.style.fontSize = "2rem";
    // highlight.style.textAlign = "center";

    // note.style.backgroundColor = "#fef3c7"; // Light yellow
    // note.style.padding = "10px";
    // note.style.borderRadius = "8px";
    // note.style.fontStyle = "italic";

// ✅ Output:

// Title turns tomato red, bigger, centered
// Note gets a warm background, rounded corners, and italics



// 🎮 Challenge 1:

// Try this yourself now — change the h1 with id mainHeading to:

// Font: Courier New
// Color: midnightblue
// Add a bottom border

// 💡Use .style.fontFamily, .style.color, .style.borderBottom

// Solution...

    // heading.style.fontFamily = "Courier New"
    // heading.style.color = "midnightblue"
    // heading.style.borderBottom = "3px solid midnightblue"

    