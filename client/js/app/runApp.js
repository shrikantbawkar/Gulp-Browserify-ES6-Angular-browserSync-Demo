class RunApp {
	/*@ngInject*/
	constructor ($rootScope) {	
		this.rootScope = $rootScope;
		this.run();
	}
	run() {
		this.rootScope.$on("handleCtrlChange", (evt, args) => this.rootScope.$broadcast("handleBroadcastEvt", args));
	}
}

module.exports = function(ngModule) {
	ngModule.run(($rootScope) => new RunApp($rootScope));
}
