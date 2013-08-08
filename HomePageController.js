function homePageController(req, res, app){
	res.render("devices",{
		devices:[
			{	
				name: "iapd device",
			}
		]
	});
	//res.send("Inside Home Page");
}
module.exports = homePageController;
