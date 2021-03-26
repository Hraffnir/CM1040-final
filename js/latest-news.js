var currentPage = 1;
var itemsPerPage = 5;

function getNewsArticles() {
    return articles.filter(function(article){
        return article.type === 'news';
    })
}

function nextPage() {
    if (currentPage == getTotalPages()) {
        return;
    }

    currentPage++;
    getArticlesForPage();
}

function previousPage() { 
    if(currentPage == 1) {
        return;
    }

    currentPage--;
    getArticlesForPage();
}

function getTotalPages() {
    return Math.ceil(getNewsArticles().length / itemsPerPage);
}

function getArticlesForPage() {
    var mainContentArea = document.getElementById("main-content");
    mainContentArea.innerHTML = '';

    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var articlesToDisplay = getNewsArticles().slice(start, end);

    var alternator = 1;
    articlesToDisplay.forEach(function(article) {
        var reverseClass = alternator % 2 != 0 ? '' : 'flex-reverse';
        
        alternator++;

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

    mainContentArea.innerHTML += `
        <section class="paging-buttons">
            <button class="${currentPage === 1 ? 'disabled' : ''}" type="button" onclick="previousPage()">Previous Page</button>

            <button class="${currentPage === getTotalPages() ? 'disabled' : ''}" type="button" onclick="nextPage()">Next Page</button>
        </section>
    `;
}

(function() {
    getArticlesForPage();
})();