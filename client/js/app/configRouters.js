class ConfigRouters {
	/*@ngInject*/
	constructor ($stateProvider, $urlRouterProvider) {
        //debugger;
		this.stateProvider = $stateProvider;
		this.urlRouterProvider = $urlRouterProvider;
		this.configRouters();
    }
	configRouters() {
		this.urlRouterProvider.otherwise("/app");
		this.stateProvider.state("app", {
			url: "/app", 
			templateUrl: "view/app.html"
		}).state("app.scope", {
			url: "/scope", 
			templateUrl: "view/scope.html", 
			/*@ngInject*/
			controller: function($scope)
			{
				$scope.msg = "Dummy123 text"; 
				document.getElementById("btn").addEventListener("click", function(){ 								
					$scope.$apply(function(){
						$scope.msg = "Changed text!!"; 					
					}); 
				}); 
				
				$scope.angularBtn = function(){
					$scope.msg = "Angular btn changed text!!"; 
				}
			}
		})
		.state("app.watch", {
			url: "/watch", 
			templateUrl: "view/watch.html", 
			/*@ngInject*/
			controller: function($scope)
			{
				$scope.$watch("msg1", function(newVal, oldVal){ 							
					if(newVal) if(newVal.length > 0) $scope.newMsg1 = "Greeting, "+newVal; 
				}); 
				$scope.updateVal = function(newVal){
					if(newVal.length > 0) $scope.newMsg2 = "Greeting, "+newVal; 
				} 
			}
		})
		.state("app.custom_filters", {
			url: "/custom_filters", 
			templateUrl: "view/custom_filters.html", 
			controller: "custom_filters"
		})
		.state("app.publisher_Subscriber", {
			url: "/publisher_Subscriber", 
			templateUrl: "view/publisher_Subscriber.html"
		})
		.state("app.service", {
			url: "/service", 
			templateUrl: "view/service.html"
		})
		.state("app.service.service_callback", {
			url: "/service_callback", 
			templateUrl: "view/service_callback.html", 
			controller: "service_callback"
		})
		.state("app.service.service_Promise", {
			url: "/service_Promise", 
			templateUrl: "view/service-promiseAPI.html", 
			controller: "service_PromiseAPI"
		})
		.state("app.service.service_Promise_Custom", {
			url: "/service_Promise_Custom", 
			templateUrl: "view/service-promiseAPI-custom.html", 
			controller: "service_PromiseAPICustom"
		})
		.state("app.directive", {
			url: "/directive", 
			templateUrl: "view/directives.html"
		})
		.state("app.directive.directive_Simple", {
			url: "/directive_Simple", 
			templateUrl: "view/directive_Simple.html"
		})
		.state("app.directive.directive_ScopeHandling", {
			url: "/directive_ScopeHandling", 
			templateUrl: "view/directive_ScopeHandling.html", 
			controller: "directive_ScopeHandling"
		})
		.state("app.directive.directive_EventHandling", {
			url: "/directive_EventHandling", 
			templateUrl: "view/directive_EventHandling.html"
		})
		.state("app.directive.directive_Transclusion", {
			url: "/directive_Transclusion", 
			templateUrl: "view/directive_Transclusion.html"
		});		
	}
}

module.exports = function(ngModule) {
	ngModule.config(($stateProvider, $urlRouterProvider) => new ConfigRouters($stateProvider, $urlRouterProvider))
}
