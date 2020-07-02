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
    source: 'Mahatma Gandhi'
  },
  {
    quote: 'Those who deny freedom to others, deserve it not for themselves; and, under a just God, can not long retain it.',
    source: 'Abraham Lincoln',
    citation: 'The Collected Works of Abraham Lincoln',
    year: '1859'
  },
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    year: '1980'
  },
  {
    quote: 'The Force is strong with this one.',
    source: 'Darth Vader',
    citation: 'Star Wars Episode IV: A New Hope'
  },
  {
    quote: 'Continuous effort, not strength nor intelligence, is the key to unlocking our potential.',
    source: 'Winston Churchill',
  }

]


function getRandomQuote(arr) {
  let randomObjectNum = Math.floor((Math.random() * arr.length) + 1);
  return arr[randomObjectNum - 1];
}

console.log(getRandomQuote(quotes));



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);