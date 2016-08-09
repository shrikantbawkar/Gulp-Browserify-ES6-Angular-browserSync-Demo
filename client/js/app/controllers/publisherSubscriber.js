class myCtrlPs1 {
	/*@ngInject*/
	constructor ($scope) {
		this.scope = $scope;
		this.controller();
	}
	controller() {
		this.scope.ctrlChanged = () => this.scope.$emit("handleCtrlChange", {arg: this.scope.msg, frm: "1"}); 		
		this.scope.$on("handleBroadcastEvt", (evt, args) => this.scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg);
	}
}
class myCtrlPs2 {
	/*@ngInject*/
	constructor ($scope) {
		this.scope = $scope;
		this.controller();
	}
	controller() {
		this.scope.ctrlChanged = () => this.scope.$emit("handleCtrlChange", {arg: this.scope.msg, frm: "2"}); 		
		this.scope.$on("handleBroadcastEvt", (evt, args) => this.scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg);
	}
}
class myCtrlPs3 {
	/*@ngInject*/
	constructor ($scope) {
		this.scope = $scope;
		this.controller();
	}
	controller() {
		this.scope.ctrlChanged = () => this.scope.$emit("handleCtrlChange", {arg: this.scope.msg, frm: "3"}); 		
		this.scope.$on("handleBroadcastEvt", (evt, args) => this.scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg);
	}
}

module.exports = function(ngModule) {
	ngModule.controller("my-ctrl-ps1", ($scope) => new myCtrlPs1($scope));
	ngModule.controller("my-ctrl-ps2", ($scope) => new myCtrlPs2($scope));
	ngModule.controller("my-ctrl-ps3", ($scope) => new myCtrlPs3($scope));
}
