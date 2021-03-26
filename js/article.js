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
            <div class="article-header-image" style="background-image: url(${article.bigImage})"></div>
        
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
        if (typeof(content) === 'object') {

            if(content.video){
                paragraphs += `
                <div class="article-video-container">
                    <video controls>
                        <source src="${content.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
            } else if (content.asideImage) {
                paragraphs += `
                <aside class="article-paragraph-aside-image" style="background-image: url(${content.asideImage})">
                </aside>
            `;
            }
        } else {
            paragraphs += `
            <p class="article-paragraph">
                ${content}
            </p>
        `;
        }
    })

    return paragraphs;
}

(function(){
    getArticle();
})();