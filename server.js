http = require('http');
url = require('url');

function startserver(route,handle){
	function onRequest(request,response){
		console.log("request recieved");
		pathname = url.parse(request.url).pathname;
		route(pathname,handle,response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("server has been started");
}
exports.startserver = startserver;
// startserver();