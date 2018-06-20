function getArticleGenerator(articles) {
    return () => {
        if (articles.length > 0) {
            $('#content').append(`<article>${articles.shift()}</article>`);
        }
    }
}