// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

var QUOTES;

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}

function fetchQuotes() {
   return new Promise(resolve => {
fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        resolve(data.quotes);
     });
  }); 
}

function updateQuote() {
    const randomQuoteIndex = generateRandomInteger(0, QUOTES.length);
    const randomQuote = QUOTES[randomQuoteIndex];
    document.getElementById("text").textContent = randomQuote.quote;
    document.getElementById("author").textContent = randomQuote.author;  
}

function updateTweeterHref() {
  let text = document.getElementById("text").textContent;
  document.getElementById("tweet-quote").href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${text}`;
}

function updateTumblrHref() {
  let text = document.getElementById("text").textContent;
  let author = document.getElementById("author").textContent;
  document.getElementById("tumblr-quote").href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
}

function updateQuoteButtonReferences() {
  updateQuote();
  updateTweeterHref();
  updateTumblrHref();
}

function onNewQuoteRequest() {
  updateQuoteButtonReferences();
}

window.onload = () => {
  fetchQuotes().then(quotes => {
    QUOTES = quotes;
    updateQuoteButtonReferences();
  });
};
