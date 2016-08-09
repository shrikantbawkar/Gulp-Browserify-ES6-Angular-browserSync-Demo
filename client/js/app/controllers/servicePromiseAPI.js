class servicePromiseAPI {
	/*@ngInject*/
	constructor ($scope, myServicePromiseAPI) {
		this.scope = $scope;
		this.servicePromiseAPI = myServicePromiseAPI;
		this.controller();
	}
	controller() {
		this.scope.msg = "1"; 
		this.scope.sortorder = "name"; 
		this.servicePromiseAPI.getData().then((value) => {
			this.scope.event = value.data[0][0]; 
			this.scope.sessions = value.data[1]; 
		}, (error) => console.log("Promise API error : "+error.data)); 
	}
}

module.exports = function(ngModule) {
	ngModule.controller("service_PromiseAPI", ($scope, myServicePromiseAPI) => new servicePromiseAPI($scope, myServicePromiseAPI));
}
