var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/device");

var db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error :"));
db.on("open", function(){console.log("Connected")});

var deviceSchema = mongoose.Schema({
	name: String,
	version: String,
	os: String,
	owner: String,
	charger: Boolean,
	USBCable: Boolean,
	picture: String,
	deviceId: String,
	chkUser: String,
	canBeLeased: Boolean
});

var DeviceModel = mongoose.model("device",deviceSchema);

var sureshipad = new DeviceModel({
	name: "ipad",
	version: "2",
	os: "IOS 6",
	owner: "Oliver",
	charger: true,
	USBCable: true,
	picture: "",
	deviceId: "",
	chkUser: "Suresh Raj Kumar",
	canBeLeased: false
});
// sureshipad.save(function(err, device){
//  if(err){
//    console.log("some problem");
//  }
//  console.log(device);
// });

// DeviceModel.find({name: /^ipad/},function(err, device){ console.log(device)});
