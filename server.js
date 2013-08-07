var http = require("http");
var url = require("url");

//Command controller mapper
var commandMapper = {
	"/home": {
		controller: "HomePageController",
		authRequired: false
	},
	"/user":{
		
	},
	"/device":{
	
	}
};
function onRequest(request, response){
	console.log(url.parse(request.url,true));
	response.write("Server running");
	response.end();
};
/**
* Command pipe line handler for handeling all the commands
* @param {object} http request object
* @paran {object} http response object
*/
function commandPipeLineHandler(request, response){
	var urlParams = url.parse(request.url,true),
		pathName = urlParams.pathname,
		controller;
	if((pathName!==null && pathName==="/home") || pathName===null){
		controller = require(commandMapper["/home"].controller);
	}else{

	}
	controller.initialize(request, response);
};
http.createServer(onRequest).listen(8888);
