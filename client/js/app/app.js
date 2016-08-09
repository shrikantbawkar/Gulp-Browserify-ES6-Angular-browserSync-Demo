const API_KEY = "./json/webservice.json";
module.exports = API_KEY;

var angular = require("angular");
require("angular-ui-router");
require("angular-sanitize");

var ngModule = angular.module("myApp", ["ui.router", "ngSanitize"]);

require("./runApp")(ngModule);
require("./configRouters")(ngModule);
require("./controllers")(ngModule);
require("./directives")(ngModule);
require("./filters")(ngModule);
require("./services")(ngModule);
