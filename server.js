var http = require('http');
var url = require('url');

module.exports = {
    createServer: function(router,handle) {
        const onRequest = (request, response) => {
            var pathname = url.parse(request.url).pathname;
            var reviewData = '';
            request.setEncoding("utf8");
            request.addListener('data', chunk => reviewData+=chunk);
            request.addListener('end',  () => router(handle, pathname, response, reviewData)); 
        }
        http.createServer(onRequest).listen(3000);
        console.log("Sever started on port 3000");
    }
}
