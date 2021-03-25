function getArticle() {
    var params = new URLSearchParams(window.location.search);
    var articleId = params.get('articleId');

    if (!articleId) {
        console.error('showing error');
    }

    var article = articles.find(function (article) {
        return article.id == articleId;
    });

    console.log(article);

    var mainContentArea = document.getElementById("main-content");
    mainContentArea.innerHTML = '';

    mainContentArea.innerHTML += `
        <section class="article-section">
            <img class="article-image" src="${article.bigImage}" />
        
            <article class="article">
                <header>
                    <h2>${article.title}</h2>
                </header>
                    ${readBodyContents(article.paragraphs)}
            </article>
        </section>
    `;
}

function readBodyContents(bodyContents) {
    var paragraphs = '';

    bodyContents.forEach(function(content){
        paragraphs += `
            <p class="article-paragraph">
                ${content}
            </p>
        `;
    })

    return paragraphs;
}

(function(){
    getArticle();
})();