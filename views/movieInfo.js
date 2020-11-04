path = require('path')
const movieInfo = (listItem) => {
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${listItem.title}</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class ='heading detail_heading'>
                <h1 id = 'listItemHeader'>${listItem.title}</h1>
            </div>
            <div class = 'listItem detail_listItem'>
                <img src = "/${listItem.thumbnail}" class = 'thumbnails'></img>
                <p>Directed by: ${listItem.director}</p>
                <span><img src = "/star.png" class = 'star'></img>${listItem.rating}</span>
                <span>${listItem.summary}</span>
                <h2><a href = '/' id='back'><< TOP TEN</a></h2>
            </div>
        </body>
    </html>
    `
    return html
}

module.exports = movieInfo