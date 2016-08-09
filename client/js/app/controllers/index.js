module.exports = function(ngModule) {
	require("./directiveScopeHandling")(ngModule);
	require("./durationFilter")(ngModule);
	require("./publisherSubscriber")(ngModule);
	require("./serviceCallback")(ngModule);
	require("./servicePromiseAPI")(ngModule);
	require("./servicePromiseAPICustom")(ngModule);
}