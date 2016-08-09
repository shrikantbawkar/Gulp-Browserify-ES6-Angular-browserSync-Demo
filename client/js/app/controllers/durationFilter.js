class DurationFilter {
	/*@ngInject*/
	constructor ($scope) {
		this.scope = $scope;
		this.durationFilter();
	}
	durationFilter() {
		this.scope.msg = "1"; 
		this.scope.sortorder = "name"; 
		this.scope.event = {
			name: "Learning", 
			date: "29/01/2015", 
			time: "16.24 PM", 
			duration: "4", 
			price: "2000", 
			city: "pune", 
			district: "pune", 
			state: "maharashtra" 
		}; 
		this.scope.sessions = [{
			name: "BackboneJS", 
			complexity: "Hard", 
			documentation: "available", 
			star: "4"
		}, 
		{
			name: "AngularJS", 
			complexity: "Easy", 
			documentation: "available", 
			star: "5"
		},
		{
			name: "KnockoutJS", 
			complexity: "medium", 
			documentation: "available", 
			star: "3"
		},
		{
			name: "ExtJS", 
			complexity: "Hard", 
			documentation: "available", 
			star: "5"				
		}]; 
	}
}

module.exports = function(ngModule) {
	ngModule.controller("custom_filters", ($scope) => new DurationFilter($scope));
}
