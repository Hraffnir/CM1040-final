// This will get the article from the articles "DB" and output
// relevant HTML elements on the page.
function getArticle() {
    // First we fetch the URL params so we can get the article ID 
    // from the URL.
    var params = new URLSearchParams(window.location.search);
    var articleId = params.get('articleId');

    // If it's not found, log an error.
    if (!articleId) {
        console.error('showing error');
    }

    // Traverse the articles "DB" array and find the article
    // with the given ID.
    var article = articles.find(function (article) {
        return article.id == articleId;
    });

    // Get the main content area DOM element
    var mainContentArea = document.getElementById("main-content");
    // Ensure the content area is clean
    mainContentArea.innerHTML = '';

    // Output the relevant HTML to display the article.
    // See "readBodyContents" function notes below.
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

// This will read the contents of the paragraphs 
// in the article and output relevant HTML.
function readBodyContents(bodyContents) {
    var paragraphs = '';

    bodyContents.forEach(function(content){
        // We check if the type of the content is an object
        // so we know what to display, such as if it's got a video property
        // then we need to output a "video" DOM element with the video's URL.
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

// Self executing function which executes on page load.
(function(){
    // Get the initial articles for this page.
    getArticle();
})();