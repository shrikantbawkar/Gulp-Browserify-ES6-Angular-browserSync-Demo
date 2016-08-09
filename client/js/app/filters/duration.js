class Duration {
	/*@ngInject*/
	constructor() {
		return this.duration();
	}
	duration(){
		return function(cs){
			switch(cs)
			{
				case "1": return "one hr"; 
				case "2": return "two hr"; 
				case "3": return "half day"; 
				case "4": return "full day"; 
			}
		}
	}
}

module.exports = function(ngModule) {
	ngModule.filter("durations", () => new Duration());
}
