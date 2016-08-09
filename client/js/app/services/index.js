module.exports = function(ngModule) {
	require("./callback")(ngModule);
	require("./promiseAPI")(ngModule);
	require("./promiseAPICustom")(ngModule);
}