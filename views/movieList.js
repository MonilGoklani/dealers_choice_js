path = require('path')
const movieList = (list) => {
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>IMDB TOP 10</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class ='heading'>
                <h1>IMDB TOP 10 MOVIES</h1>
            </div>
            <div class = 'list'>
                ${list.map(elem=>`
                <a href='/details/${elem.id}'>
                <div class = 'listItem'>
                <img src = "/${elem.thumbnail}" class = 'thumbnails'></img>
                <span>${elem.id}. ${elem.title}<small>(${elem.year})</small></span>
                </div>
                </a>
                `).join('')}
            </div>
        </body>
    </html>
    `
    return html
}

module.exports = movieList