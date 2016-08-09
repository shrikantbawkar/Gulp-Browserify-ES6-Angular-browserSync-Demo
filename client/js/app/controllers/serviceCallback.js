class ServiceCallback {
	/*@ngInject*/
	constructor ($scope, myServiceCallback) {
		this.scope = $scope;
		this.serviceCallback = myServiceCallback;
		this.controller();
	}
	controller() {
		this.scope.msg = "1"; 
		this.scope.sortorder = "name"; 
		this.serviceCallback.getData((d) => {
			this.scope.event = d[0][0]; 
			this.scope.sessions = d[1]; 
		}); 
	}
}

module.exports = function(ngModule) {
	ngModule.controller("service_callback", ($scope, myServiceCallback) => new ServiceCallback($scope, myServiceCallback))
}
