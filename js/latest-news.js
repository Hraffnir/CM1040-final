// Some variables for keeping track of the current page
// and how many articles we want to display per page.
var currentPage = 1;
var itemsPerPage = 3;

// Filters news articles from our "DB" of articles (found in article-data.js)
// and returns only the relevant articles of type "news" for this page.
function getNewsArticles() {
    return articles.filter(function(article){
        return article.type === 'news';
    })
}

// Increments the current page number, without going out of bounds,
// and fetches all articles for the current page number.
function nextPage() {
    if (currentPage == getTotalPages()) {
        return;
    }

    currentPage++;
    getArticlesForPage();
}

// Decrements the current page number, without going out of bounds,
// and fetches all articles for the current page number.
function previousPage() { 
    if(currentPage == 1) {
        return;
    }

    currentPage--;
    getArticlesForPage();
}

// Simple function to get how many pages there are in total,
// this will allow for stopping the "Next" page button from going
// out of bounds.
function getTotalPages() {
    return Math.ceil(getNewsArticles().length / itemsPerPage);
}

// Based on the current page, this function will fetch all relevant
// articles for this page and set the HTML in the main content area.
function getArticlesForPage() {
    var mainContentArea = document.getElementById("main-content");
    mainContentArea.innerHTML = '';

    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var articlesToDisplay = getNewsArticles().slice(start, end);

    // The alternator allows for alternating the layout of the articles.
    var alternator = 1;

    // Loop through each relevant article for this page based on the paginated
    // array.
    articlesToDisplay.forEach(function(article) {
        var reverseClass = alternator % 2 != 0 ? '' : 'flex-reverse';

        alternator++;

        // This sets the HTML for this article inside the main content area DOM element.
        mainContentArea.innerHTML += `
            <section class="article-section ${reverseClass}">
                <div class="article-thumbnail" style="background-image: url(${article.bigImage})">
                </div>
            
                <article class="article">
                    <header>
                        <h2>${article.title}</h2>
                    </header>
                    <p class="article-summary">
                        ${article.summary}
                    </p>
                    <p class="read-more">
                        <a href="article.html?articleId=${article.id}">Read More</a>
                    </p>
                </article>
            </section>
        `;
    });

    // Sets the HTML at the bottom after all the articles, for paging articles.
    mainContentArea.innerHTML += `
        <section class="paging-buttons">
            <button class="${currentPage === 1 ? 'disabled' : ''}" type="button" onclick="previousPage()">Previous Page</button>

            <button class="${currentPage === getTotalPages() ? 'disabled' : ''}" type="button" onclick="nextPage()">Next Page</button>
        </section>
    `;
}

// Self executing function which executes on page load.
(function() {
    // Get the initial articles for this page.
    getArticlesForPage();
})();