class ServicePromiseAPICustom {
	/*@ngInject*/
	constructor ($scope, myServicePromiseAPICustom) {
		this.scope = $scope;
		this.servicePromiseAPICustom = myServicePromiseAPICustom;
		this.controller();
	}
	controller() {
		this.scope.msg = "1"; 
		this.scope.sortorder = "name"; 
		this.servicePromiseAPICustom.getData().then((value) => {
			this.scope.event = value[0][0]; 
			this.scope.sessions = value[1]; 
		}, 
		(error) => console.log("Promise API error : "+error)); 
	}
}

module.exports = function(ngModule) {
	ngModule.controller("service_PromiseAPICustom", ($scope, myServicePromiseAPICustom) => new ServicePromiseAPICustom($scope, myServicePromiseAPICustom));
}
