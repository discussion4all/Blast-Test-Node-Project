const express = require("express");
const app = express();
const router = express.Router();

const watch = require("node-watch");
const ini = require("ini");
const fs = require("fs");
const configFile = './scripts/config.ini';
const watcher = watch(configFile);
var db = require('./scripts/db');

//get config info
const config = ini.parse(fs.readFileSync(configFile,'utf-8'));

var httpPort = config.GeneralSettings.httpPort;

const HttpServer = require("http").createServer(app);

HttpServer.listen(httpPort);

watcher.on('error',(err)=>{
    console.log("Config file reading error : ",err);
});

watcher.on('ready',()=>{
    console.log("Config file loaded !");
    var dbIP = config.GeneralSettings.dbIP;
    var dbPort = config.GeneralSettings.dbPort;
    var dbName = config.GeneralSettings.dbName;
    var url = "mongodb://".concat(dbIP,':',dbPort);

    DB = module.exports = new db(url,dbName);
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const cros = require('cors');
app.use(cros());
app.use("/",router);
const question = require("./scripts/endpoints/question/questionRoutes");
app.use("/",question);
const user = require("./scripts/endpoints/user/userRoutes");
app.use("/",user);
