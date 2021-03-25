var currentPage = 1;
var itemsPerPage = 2;

function positionArticleImages() {
    var height = window.innerHeight;
    var width = window.innerWidth;

    var images = document.querySelectorAll('.gaming-article-image');

    // images.forEach(image  => {
    //     image.width = width;
    // });
}

window.onresize = positionArticleImages;

function getGamingArticles() {
    return articles.filter(function(article){
        return article.type === 'gaming';
    })
}

function nextPage() {
    var totalPages = Math.ceil(getGamingArticles().length / itemsPerPage);

    if (currentPage == totalPages) {
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

function getArticlesForPage() {
    var mainContentArea = document.getElementById("main-content");
    mainContentArea.innerHTML = '';

    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var articlesToDisplay = getGamingArticles().slice(start, end);

    articlesToDisplay.forEach(function(article) {
        mainContentArea.innerHTML += `
            <section class="gaming-article-section">
                <img class="gaming-article-image" src="${article.bigImage}" />
            
                <article class="gaming-article">
                    <header>
                        <h2>${article.title}</h2>
                    </header>
                    <p class="gaming-article-summary">
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
            <button type="button" onclick="previousPage()">Previous Page</button>

            <button type="button" onclick="nextPage()">Next Page</button>
        </section>
    `;
}

(function() {
    positionArticleImages();
    getArticlesForPage();
})();