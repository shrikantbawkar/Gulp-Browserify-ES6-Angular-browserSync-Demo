class ScopeHandeling {
	constructor($scope) {
		this.scope = $scope;
		this.controller();
	}
	controller() {
		this.scope.eventsObj = ["AngularJS", "BackboneJS", "ExtJS", "KnockoutJS"]; 
		this.scope.eventsObjMethod = (val) => alert("val in main controller : "+val)
	} 	
}

module.exports = function(ngModule) {
	ngModule.controller("directive_ScopeHandling", ($scope) => new ScopeHandeling($scope));	
}
