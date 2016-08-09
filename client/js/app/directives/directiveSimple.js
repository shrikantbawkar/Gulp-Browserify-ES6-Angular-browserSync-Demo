class Sample1 {
	constructor() {
		return this.directive();
	}
	directive() {
		return {
			restrict: "A", //E,C,M
			link: this.link
		}
	}
	link(scope, element, attrs, controllers){
		var markup = "<input type='text'></input>"; 
		element.html(markup); 
	}
}
class Sample2 {
/*@ngInject*/
	constructor($compile) {
		this.compile = $compile;
		return this.directive();
	}
	directive() {
		return {
			restrict: "A", //E,C,M
			link: (scope, element, attrs, controllers) => {
				var markup = "<input ng-model= 'msg' type='text' />{{msg}}"; 
				element.html(markup); 
				this.compile(element.contents())(scope); 
			}
		}
	}
}
class Sample3 {
/*@ngInject*/
	constructor($compile) {
		this.compile = $compile;
		this.scope = {};
		return this.directive();
	}
	directive() {
		return {
			restrict: "A", //E,C,M
			link: (scope, element, attrs, controllers) => {
				var markup = "<input ng-model= 'msg' type='text' />{{msg}}"; 
				element.html(markup); 
				this.compile(element.contents())(scope); 
			}, 
			scope: this.scope
		}
	}
}
class Sample4 {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {};
		return this.directive();
	}
	directive() {
		return {
			restrict: "E", //A,C,M
			template: "<input ng-model= 'msg' type='text' />{{msg}}", 
			scope: this.scope
		}
	}	
}
class Sample5 {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {};
		return this.directive();
	}
	directive() {
		return {
			restrict: "C", //A,C,M
			template: "<input ng-model= 'msg' type='text' />{{msg}}", 
			scope: this.scope
		}
	}	
}

class scopeHandleByValue {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {
			event: "=myEvent"
		};
		return this.directive();
	}
	directive() {
		return {
			restrict: "E", //A,C,M
			template: "<div>{{event}}</div>", 
			scope: this.scope
		}
	}	
}
class scopeHandleByMethod {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {
			eventMethodFn: "&eventMethod", 
			event: "=myEvent"
		}
		return this.directive();
	}
	directive() {
		return {
			restrict: "E", //A,C,M
			template: "<div>{{event}}&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' ng-click='eventMethodFn(event)' value='{{event}}' /></div>",  
			scope: this.scope
		}
	}	
}
class scopeHandleByExpression {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {
			event: "@myExpression" 
		}
		return this.directive();
	}
	directive() {
		return {
			restrict: "E", //A,C,M
			template: "<div>{{event}}</div>", 
			scope: this.scope
		}
	}	
}

class EventHandling {
	/*@ngInject*/
	constructor($compile) {
		this.compile = $compile;
		this.scope = {};
		return this.directive();
	}
	directive() {	
		return {
			restrict: "E", //A,C,M
			link: (scope, element, attrs, controllers) => {
				var markup = "<input ng-model= 'msg' type='text' />&nbsp;"; 
				element.html(markup); 
				this.compile(element.contents())(scope); 
				element.on("keydown", (event) => alert("event.keyCode : "+event.keyCode)); 				
			}, 
			scope: this.scope,
			controller: this.controller
		}
	}
	/*@ngInject*/
	controller($scope) {
		$scope.msg = "init text"; 
	}
}

class Transclusion {
	constructor($compile) {
		this.compile = $compile;
		this.scope = {};
		return this.directive();
	}
	directive() {
		return {
			restrict: "E", //A,C,M
			transclude: true, 
			replace: false, 
			template: "<h4 ng-click='controllerClick()'>Title</h4><div ng-transclude>qwqwqwqwqw</div>", 
			scope: this.scope, 
			controller: this.controller
		}
	}
	/*@ngInject*/
	controller($scope) {
		$scope.msg = "init text"; 
		$scope.controllerClick = function()
		{
			alert("You clicked title"); 
		}
	}
}

module.exports = function(ngModule) {
	ngModule.directive("mySample1", () => new Sample1());
	ngModule.directive("mySample2", ($compile) => new Sample2($compile));
	ngModule.directive("mySample3", ($compile) => new Sample3($compile));
	ngModule.directive("mySample4", ($compile) => new Sample4($compile));
	ngModule.directive("mySample5", ($compile) => new Sample5($compile));
	ngModule.directive("eventThumbnail", ($compile) => new scopeHandleByValue($compile));
	ngModule.directive("eventThumbnailmethod", ($compile) => new scopeHandleByMethod($compile));
	ngModule.directive("eventThumbnailexpression", ($compile) => new scopeHandleByExpression($compile));
	ngModule.directive("eventHandle", ($compile) => new EventHandling($compile));
	ngModule.directive("eventTransclusion", ($compile) => new Transclusion($compile));
}
