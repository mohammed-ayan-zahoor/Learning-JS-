
// 🥷  Level 1: GO!

    // Welcome to CSS-Style DOM Access using querySelector() & querySelectorAll() — the true weapon of modern frontend devs 💥
    // 🔹 querySelector()

    // Selects the first element that matches a CSS selector.

    // ✅ Syntax:

        document.querySelector("selector")


    // 🧠 You can use:

    // | Selector  | Targets                      |
    // | --------- | ---------------------------- |
    // | `"h1"`    | First `<h1>` tag             |
    // | `".box"`  | First element with class box |
    // | `"#main"` | Element with id="main"       |
    // | `"div p"` | First `<p>` inside a `<div>` |


        // <p class="info">First</p>
        // <p class="info">Second</p>

        let firstInfo = document.querySelector(".info")
        console.log(firstInfo)



// 🔸 querySelectorAll()
// Returns ALL matching elements as a NodeList (not HTMLCollection)

// ✅ Syntax:

    document.querySelectorAll("selector")

// Example:

    // <div class="box">Box 1</div>
    // <div class="box">Box 2</div>

    let boxes = document.querySelectorAll(".box");
    boxes.forEach(b => console.log(b.textContent));


// 🧠 NodeList vs HTMLCollection

// | Feature             | `NodeList`       | `HTMLCollection`        |
// | ------------------- | -------------    | ----------------------- |
// | Can use `forEach()` | ✅ Yes           |❌ No (unless converted)|
// | Live updating       | ❌ No (static)   | ✅ Yes                 |


