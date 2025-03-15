const motivationalQuotes = [
  'The best way to predict the future is to create it. – Abraham Lincoln',
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  'Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer',
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  'It always seems impossible until it’s done. – Nelson Mandela',
  'The only way to do great work is to love what you do. – Steve Jobs',
  'Strive not to be a success, but rather to be of value. – Albert Einstein',
  'Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis',
  'You are never too old to set another goal or to dream a new dream. – C.S. Lewis',
  'Success is the sum of small efforts, repeated day in and day out. – Robert Collier',
  'The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt',
  'Everything you can imagine is real. – Pablo Picasso',
  'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt',
  'Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs',
  'Act as if what you do makes a difference. It does. – William James',
  'Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau',
  "Don't wait. The time will never be just right. – Napoleon Hill",
  'You miss 100% of the shots you don’t take. – Wayne Gretzky',
  'What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar',
  "The harder you work for something, the greater you'll feel when you achieve it. – Unknown",
]

const quoteGenerator = document.querySelector('.quote-generator')

const usedIndexs = new Set()

const quoteElement = document.querySelector('.quote')

function generateQuote() {
  if (usedIndexs.size >= motivationalQuotes.length) {
    usedIndexs.clear()
  }

  while (true) {
    const ramdomIdx = Math.floor(Math.random() * motivationalQuotes.length)

    if (usedIndexs.has(ramdomIdx)) continue

    const quote = motivationalQuotes[ramdomIdx]
    quoteElement.innerHTML = quote
    usedIndexs.add(ramdomIdx)
    break
  }
}

quoteGenerator.addEventListener('click', () => {
  generateQuote()
})
