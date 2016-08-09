var API_KEY = require("../app");  

class PromiseAPICustomSer {
	/*@ngInject*/
	constructor($http, $log, $q) {
		this.http = $http;
		this.log = $log;
		this.q = $q;
		return this.promiseAPICustom();
	}
	promiseAPICustom(){
		return {
			getData: () => {
				var deffered = this.q.defer();
				this.http.get(API_KEY)
					.success((data, status, header, config) => deffered.resolve(data))
					.error((data, status, header, config) => deffered.reject("Error : "+status)); 
				return deffered.promise; 
			}
		}
	}
}

module.exports = function(ngModule) {
	ngModule.factory("myServicePromiseAPICustom", ($http, $log, $q) => new PromiseAPICustomSer($http, $log, $q)); 
}
