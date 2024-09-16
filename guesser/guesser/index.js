
const words = [ "react", "angular", "javascript", "bootstrap","tailwind"];

// Hints

const hints =[
   "Javascript Framework",
   "Javascript Framework",
   "Javascript Library",
   "Styling  Library"

]

// Initialise display word
let displayWord  = "";
//add the word display hint

function shuffle(str){
   //missing let in below
    strArray = Array.from(str);
     for(let i=0; i < strArray.length-1 ; ++i){
        let j = Math.floor(Math.random().strArray.length);
        // swap letters
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;

     }
    }


 function check(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if(input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()) 
        output.innerHTML = "Result: Correct";
    else  output.innerHTML = "Result: In-correct";

 }   



 function refresh(){
    index = Math.floor(Math.random()*5);
    displayWord = words[index];
    displayHint = hints[index];
    scrambled_Word = document.getElementById("scrambleWord");
    scrambled_Word.innerText = shuffle(displayWord).toUpperCase();

    let hint = document.getElementById('hint');
    hint.innerHTML = "<b>Hint :</b>" + displayHint;
    document.getElementById("output").innerText = "Result :";

 }

refresh(); 
