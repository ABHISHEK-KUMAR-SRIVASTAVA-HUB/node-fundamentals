const router  = (handle, pathname, response, reviewData) => {
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response, reviewData);
    } else{
        console.log("no matching route found");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Eror 404 page not found");
        response.end();
    }
}

exports.router = router;