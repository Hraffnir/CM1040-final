var gamingArticles = [];

var gamingArticle = {
    title: "Article Heading",
    heroImage: 'assets/images/gaming-article-hero-background.jpg',
    shortenedBody: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
};

for (var i = 0; i < 10; i++) {
    gamingArticles.push(gamingArticle);
}

function positionArticleImages() {
    var height = window.innerHeight;
    var width = window.innerWidth;

    var images = document.querySelectorAll('.gaming-article-image');

    // images.forEach(image  => {
    //     image.width = width;
    // });
}

window.onresize = positionArticleImages;

(function() {
    positionArticleImages();
})();