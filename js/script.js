/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [ //an array of objects that stores all the quotes for the generator
  {
    quote: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
    source: 'Mahatma Gandhi',
    tag: 'Historical Figure' //added a category tag to each object 
  },
  {
    quote: 'Those who deny freedom to others, deserve it not for themselves; and, under a just God, can not long retain it.',
    source: 'Abraham Lincoln',
    citation: 'The Collected Works of Abraham Lincoln',
    year: '1859',
    tag: 'Historical Figure'
  },
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    year: '1980',
    tag: 'Movie Character'
  },
  {
    quote: 'The Force is strong with this one.',
    source: 'Darth Vader',
    citation: 'Star Wars Episode IV: A New Hope',
    tag: 'Movie Character'
  },
  {
    quote: 'Continuous effort, not strength nor intelligence, is the key to unlocking our potential.',
    source: 'Winston Churchill',
    tag: 'Historical Figure'
  }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) { //generates a random number to pull a randomobject from the quotes array
  let randomObjectNum = Math.floor((Math.random() * arr.length) + 1);
  return arr[randomObjectNum - 1]; //subtract by -1 since array starts at 0
}

/***
 * `printQuote` function
***/
let html; //create a variable to store the output of the function
let currentQuote = []; //variable to store the current quote to make sure a new quote is generated in the function

function printQuote() {

  let newColor;
  let newQuote = [];
  
  do { //this do while ensures a new quote is generated upon refresh
    newQuote = getRandomQuote(quotes);
  } while (newQuote === currentQuote);
  currentQuote = newQuote;

/*the below html assignment is the page output in the html variable. The conditionals are required since not all objects have those properties.*/

  html =`
    <p class="quote">${currentQuote.quote}</p>
    <p class="source">${currentQuote.source}`

    if (currentQuote.citation){
      html =`${html}<span class="citation">${currentQuote.citation}</span>`
    } else {}
    if (currentQuote.year) {
      html =`${html}<span class="year">${currentQuote.year}</span>`
    } else {}
    if (currentQuote.tag) {
      html =`${html}<span class="tag"> ${currentQuote.tag}</span></p>`
    } else {
      html = `${html}</p>`
    };
/* the below random number assignments generate a random rgb color code to change the background color upon refresh*/
  let r = Math.floor((Math.random() * 256) + 1);
  let g = Math.floor((Math.random() * 256) + 1);
  let b = Math.floor((Math.random() * 256) + 1);

  newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.background = newColor; //assigns the new color to the background

  document.getElementById('quote-box').innerHTML = html; //output the html block to the webpage 
}

printQuote(); //calling the function ensures a quote shows up when the page first loads
setInterval(printQuote, 10000);//reruns the printQuote function every 10 seconds

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

