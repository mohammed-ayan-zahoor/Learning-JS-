
// 🧭 DOM SELECTORS MASTER PLAN — MINUTE DETAIL VERSION
// 🎯 Goal: You’ll be able to select any HTML element, in any structure, with zero hesitation.



// 🔰 LEVEL 0: BASIC DOM SELECTORS (Foundation Layer)

    // 🔹 1. document.getElementById("id")

    // ✅ What it does:

    // Selects the first element with a specific ID
    // Returns a single element
    // Only works with id, not class or tag

    // 🧠 Example:

        // <h1 id="mainTitle">Welcome</h1>

        // let title = document.getElementById("mainTitle");
        // console.log(title); // <h1 id="mainTitle">Welcome</h1>

    // ❗ Common Mistake:
    // Using #mainTitle — don’t use # here. That’s CSS style syntax. This takes just the raw id name.



    // 🔹 2. document.getElementsByClassName("className")

    // ✅ What it does:

    // Returns a collection (like an array) of all elements with that class
    // You need to loop or index into it

    // 🧠 Example:

        // <p class="desc">Line 1</p>
        // <p class="desc">Line 2</p>

        // let descs = document.getElementsByClassName("desc");
        // console.log(descs);         // HTMLCollection(2)
        // console.log(descs[1]);      // <p class="desc">Line 2</p>

    // 🧪 Mini Challenge:
    // Log the second .desc's text to the console.

        let descs = document.getElementsByClassName("desc");
        console.log(descs);
        let descs1 = descs[1].textContent;
        console.log(descs1);


    // 🔹 3. document.getElementsByTagName("tag")

    // ✅ What it does:

    // Selects all elements with the given tag (e.g. "h1", "p", "li")
    // Returns an HTMLCollection (not an array)

    // 🧠 Example:

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>


        let items = document.getElementsByTagName("li");
        console.log(items);        // All <li> elements


    // 🔬 What’s an HTMLCollection?

    // It looks like an array, but it's not a real array.
    // You can loop with for...of, but not use .map() or .forEach() unless you convert it with:

        Array.from(items).forEach(item => console.log(item));


    // 🧪 LEVEL 0 PRACTICE SET:

        // HTML to work with:

            // <div id="hero">I’m the hero</div>
            // <p class="para">Paragraph 1</p>
            // <p class="para">Paragraph 2</p>
            // <h2>Subheading</h2>
            // <h2>Another Subheading</h2>


        // ✅ Task 1:
        // Select the #hero and log it.

            let hero = document.getElementById("hero")
            console.log(hero)

        // ✅ Task 2:
        // Select all .para and log their text.

            let para = document.getElementsByClassName("para")
            let paraText = [para[0].textContent, para[1].textContent]
            console.log(paraText)
            
        // ✅ Task 3:
        // Select all <h2> and log how many you found.

            let h2 = document.getElementsByTagName("h2")
    
            

