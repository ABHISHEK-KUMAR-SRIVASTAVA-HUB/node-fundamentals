const querystring = require('querystring');

const home = (response) => {
    const html = `
    <html>
        <body>
          <form action="/review"  method="post">
          <h1> Review Form </h1>
            <textarea name="text" rows=10 cols=50>  </textarea>
            <button type="submit" >Submit</button>
          </form>
        </body>
    </html>
    `
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}

const review  = (response, reviewData) => {
    const html = `
    <html>
        <body>
          <h1> Review Submitted </h1>
           <p>Your review is :  <b>${querystring.parse(reviewData).text}</b> </p>
        </body>
    </html>
    `
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}

exports.home = home
exports.review = review;