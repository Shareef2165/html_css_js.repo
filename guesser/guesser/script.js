const words = ["react", "angular", "javascript", "bootstrap", "tailwind"];
//Declares an array called words that contains strings representing different JavaScript frameworks, libraries, and tools.

// Hints
const hints = [
  "Javascript Library",
  "Javascript Framework",
  "Programming Language",
  "Styling Library",
  "Styling Library",
];

//Declares an array called hints that contains hints corresponding to each word in the words array. Each hint provides a brief description of the word at the same index.

// Initialise display word
let displayWord = "";
let displayHint = "";

//Initializes two variables, displayWord and displayHint, which will hold the current word and its corresponding hint selected during the game.

// Shuffle function
function shuffle(str) {
  let strArray = Array.from(str);

  //Defines a function shuffle that takes a string str as an argument. Inside the function, the string is converted into an array of characters using Array.from().

  for (let i = strArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    //A for loop iterates from the end of the array (strArray.length - 1) down to the first character. Inside the loop, a random index j is generated using Math.floor(Math.random() * (i + 1)), ensuring that j is a valid index within the bounds of the array.

    // Swap letters
    [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
  }

  //Swaps the elements at indices i and j. This uses destructuring assignment to swap two array elements, effectively shuffling the array in place.

  return strArray.join("");
}

//Joins the shuffled array back into a string and returns it. This completes the shuffling process.

// Check function
function check() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  //Defines a function check that retrieves the user's input and the output display elements from the DOM using getElementById.

  if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase())
    output.innerHTML = "Result: Correct";
  else output.innerHTML = "Result: In-correct";
}

//Compares the user's input (converted to lowercase) with the current display word (also converted to lowercase). If they match, it updates the output element's inner HTML to "Result: Correct"; otherwise, it sets it to "Result: In-correct".

// Refresh function
function refresh() {
  let index = Math.floor(Math.random() * words.length);

  //Defines a function refresh that generates a random index within the bounds of the words array to select a random word and its hint.

  displayWord = words[index];
  displayHint = hints[index];

  //Sets displayWord and displayHint to the word and hint corresponding to the randomly selected index.

  let scrambledWordElement = document.getElementById("scrambleWord");
  scrambledWordElement.innerText = shuffle(displayWord).toUpperCase();

  //Retrieves the DOM element where the scrambled word will be displayed (scrambleWord) and sets its innerText to the shuffled version of the selected word, converted to uppercase using toUpperCase().

  let hint = document.getElementById("hint");
  hint.innerHTML = "<b>Hint :</b> " + displayHint;

  //Retrieves the hint element from the DOM and sets its HTML content to show the hint for the current word, prefixed with "Hint:".

  document.getElementById("output").innerText = "Result:";
}

//Resets the output display text to "Result:" to clear previous results whenever a new word is displayed.

refresh();

//Calls the refresh() function to initialize the game by selecting and displaying a new word and hint when the script first runs.