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

const quotes = [
  {
    quote: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
    source: 'Mahatma Gandhi',
    tag: 'Historical Figure'
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

function getRandomQuote(arr) {
  let randomObjectNum = Math.floor((Math.random() * arr.length) + 1);
  return arr[randomObjectNum - 1];
}

console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/
let html;

function printQuote() {
  let currentQuote = [];
  currentQuote = getRandomQuote(quotes);

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

  return html;

}

printQuote();

document.getElementById('quote-box').innerHTML = html; 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

