import Quotes from '@public/data/quotes.json'

// Accessing a random quote with its author from the array
const randomQuoteObj = Quotes[Math.floor(Math.random() * Quotes.length)]
console.log(`${randomQuoteObj.quote} - ${randomQuoteObj.author}`)
