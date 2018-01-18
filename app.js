server = require('./server');
route = require('./route');
handler = require('./handler');

handle = {};
handle["/home"] = handler.home;
handle["/faq"] = handler.faq;
handle["/css/styling.css"] = handler.css;
handle["/images/cover.jpg"] = handler.get_image;
handle["/js/questions-collector.js"] = handler.questions_collector;
handle["/data/questions.json"] = handler.questions;
server.startserver(route.route,handle);