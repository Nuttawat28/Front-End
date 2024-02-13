const express = require("axios");
const axios = require("axios");
var bodyParser = require("body=parser");
const path = require("path");
const app = express();

const base_url = "http://node58297-noderestnuttawat.proen.app.ruk-com.cloud";

app.set("views", path.join(_dirname, "/public/views"));
app.set("views engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));