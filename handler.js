fs = require('fs');

function home(response){
	response.writeHead(200,{"Content-type" : "text/html"});
	var data = fs.readFileSync('faq.html');	
	var html = data.toString();
	response.write(html);
	console.log("this is home page");
	response.end();
}
function faq(response){
	response.writeHead(200,{"Content-type" : "text/plain"});
	response.write("hi this is faq from handler");
	// console.log("this is faq");
	response.end();
}
function css(response){
	response.writeHead(200,{"Content-type" : "text/css"});	
	var data = fs.readFileSync('./css/styling.css');	
	var cs = data.toString();
	response.write(cs);
	// console.log('css is here');
	response.end();
}
function questions_collector(response){
	response.writeHead(200,{"Content-type" : "text/javascript"});	
	var data = fs.readFileSync('./js/questions-collector.js');	
	var js = data.toString();
	response.write(js);
	// console.log('js is here');
	response.end();
}
function get_image(response){
	response.writeHead(200,{"Content-type" : "image/jpg"});	
	var data = fs.readFileSync('./images/cover.jpg');	
	response.end(data, 'binary');
}
function questions(response){
	response.writeHead(200,{"Content-type" : "text/javascript"});	
	var data = fs.readFileSync('./data/questions.json');	
	var js = data.toString();
	response.write(js);
	response.end();
}
exports.home = home;
exports.faq = faq;
exports.css = css;
exports.questions_collector = questions_collector;
exports.get_image = get_image;
exports.questions = questions;