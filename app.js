function getQuoteOfTheDay() {
    quoteOfTheDay = quotes[0];

    quouteBody = document.getElementById('quote-body');
    quouteAuthor = document.getElementById('quote-author');

    quouteBody.innerHTML = quoteOfTheDay.body;
    quouteAuthor.innerHTML = quoteOfTheDay.author;
}

function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    
    return day;
}

function showMostVisitedSites(mostVisitedURLs) {
    alert(1);
}

getQuoteOfTheDay();
chrome.topSites.get(showMostVisitedSites)