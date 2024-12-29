document.getElementById("search-button").addEventListener("click", function() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var articles = document.querySelectorAll("article");
    
    articles.forEach(function(article) {
        var articleTitle = article.querySelector("h2").textContent.toLowerCase();
        if (articleTitle.includes(searchTerm)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll(".category-link");
    var articles = document.querySelectorAll("article");

    categoryLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var selectedCategory = link.dataset.category;
            if (selectedCategory) {
                articles.forEach(function(article) {
                    var articleCategory = article.dataset.category;

                    if (articleCategory === selectedCategory || selectedCategory === "all") {
                        article.style.display = "block";
                    } else {
                        article.style.display = "none";
                    }
                });
            }
        });
    });
});