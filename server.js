var express = require("express");
var app = express();
var url = require("url");
var cons = require("consolidate");

app.engine("dust", cons.dust);
app.configure(function(){
	app.set("view engine", "dust");	
	app.set("views","templates");
});
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
function commandHandler(req, res){
	var urlParams = url.parse(req.url,true),
		pathName = urlParams.pathname,
		controller,
		page;
	console.log(req.route);
	if((pathName!==null && pathName==="/home") || pathName==="/"){
		page = commandMapper["/home"];
		controller = require(page.controllerPath);
	}else{
	}
	if(controller){
		controller(req, res, app);
	}else{
		res.send("Unknown command");
	}
};
app.get("/",commandHandler);
app.get("*",commandHandler);

app.listen(3000);
