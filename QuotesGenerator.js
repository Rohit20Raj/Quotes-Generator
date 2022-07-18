var quotes = [
    ["A person should not be too honest. Straight trees are cut first and honest people are screwed first.",
        "― Chanakya"]
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "-Nelson Mandela"],
    ["As soon as the fear approaches near, attack and destroy it.",
        "― Chanakya"]
    ["The way to get started is to quit talking and begin doing.", "-Walt Disney"],
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.", "-Steve Jobs"],
    ["If life were predictable it would cease to be life, and be without flavor.", "-Eleanor Roosevelt"],
    ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "-Oprah Winfrey"],
    ["Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
        "― Kautilya"]
    ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "-James Cameron"],
    ["Life is what happens when you're busy making other plans.", "-John Lennon"],
    ["Be so busy improving your self that you have no time to criticize others.", "– Chetan Bhagat"],
    ["Depth of friendship does not depend on length of acquaintance.", "– Rabindranath Tagore"],
    ["The arrow shot by the archer may or may not kill a single person. But stratagems devised by wise men can kill even babes in the womb.",
        "― Kautilya"]
];

function generateQuote() {
    quote = Math.floor(Math.random() * quotes.length);
    document.querySelector("#quote").innerText = '"' + quotes[quote][0] + '"';
    document.querySelector("#person").innerText = quotes[quote][1].toUpperCase();

    if (screen.width < screen.height) {
        document.body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/1200732.jpg")';
    }
    else {
        document.body.style.backgroundImage = 'url("https://thumbs.dreamstime.com/b/library-background-white-bookshelves-books-textbooks-learning-education-concept-d-illustration-146004771.jpg")';
    }
}

var quote = Math.floor(Math.random() * quotes.length);

document.querySelector("#quote").innerText = '"' + quotes[quote][0] + '"';
document.querySelector("#person").innerText = quotes[quote][1].toUpperCase();

var newQuote = document.querySelector("#newQuote");

newQuote.addEventListener('click', generateQuote);

// console.log(screen.width, screen.height);

