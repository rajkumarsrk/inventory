var express = require("express");
var url = require("url");
var app = express();

//Command controller mapper
var commandMapper = {
	"/home": {
		controllerPath: "./HomePageController",
		authRequired: false
	},
	"/user":{
		
	},
	"/device":{
	
	}
};
/**
* Command pipe line handler for handeling all the commands
* @param {object} http request object
* @paran {object} http response object
*/
function commandHandler(request, response){
	var urlParams = url.parse(request.url,true),
		pathName = urlParams.pathname,
		controller,
		page;
	if((pathName!==null && pathName==="/home") || pathName==="/"){
		page = commandMapper["/home"];
		controller = require(page.controllerPath);
	}else{
	}
	if(controller){
		//console.log(controller);
		controller(request, response);
	}else{
		response.send("Unknown command");
	}
};
app.get("/",function(request, response){
	//console.log(url.parse(request.url,true));
	commandHandler(request, response);
});
app.listen(3000);
