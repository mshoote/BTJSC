var data = {performedByName:"xzzKCV9EUs",id:8480,title:"Ls1heJge9Sd46IMI87foM701tWIocAAWDuk6hZ36pPSsImVD7i",duration:1,jobColor:"#435130",jobId:2227104,isMarkedComplete:true,builderID:1,scheduleColor:"#435130",startDate:"2017-01-23T19:59:40.4090732Z",startDateShowTime:true,endDate:"2017-01-23T19:59:40.4090732Z",endDateShowTime:true,confirmStatus:"True"};
var complicateddata = 
{
	"success": true,
	"data": {
		"canMarkComplete": false,
		"infiniteScrollStatus": 0,
		"isLoaded": false,
		"scheduleItems": [{
			"performedByName": true,
			"id": 8480,
			"title": "Ls1heJge9Sd46IMI87foM701tWIocAAWDuk6hZ36pPSsImVD7i",
			"duration": 1,
			"jobColor": "#435130",
			"jobId": 2227104,
			"isMarkedComplete": true,
			"builderID": 1,
			"scheduleColor": "#435130",
			"startDate": "2017-01-23T19:59:40.4090732Z",
			"startDateShowTime": true,
			"endDate": "2017-01-23T19:59:40.4090732Z",
			"endDateShowTime": true,
			"confirmStatus": "True",
			"confirmCounts": {
				"pendingCount": 0,
				"confirmedCount": 0,
				"declinedCount": 0,
				"isInternallyConfirmed": false
			},
			"completeStatus": "MVqF2imct9v0zpU",
			"progress": 0.94
		}, {
			"performedByName": "RV49ox8MWg",
			"id": 1924,
			"title": "vTA8Rbkbmr6pbuGfVyksydHBPxGLef0JxQyxbfmVp4SPYUaIoj",
			"duration": 1,
			"jobColor": "#435130",
			"jobId": 2227104,
			"isMarkedComplete": false,
			"builderID": 1,
			"scheduleColor": "#435130",
			"startDate": "2017-01-23T19:59:40.4981556Z",
			"startDateShowTime": false,
			"endDate": "2017-01-23T19:59:40.4981556Z",
			"endDateShowTime": false,
			"confirmStatus": "False",
			"confirmCounts": {
				"pendingCount": 1,
				"confirmedCount": 1,
				"declinedCount": 1,
				"isInternallyConfirmed": false
			},
			"completeStatus": "Ed1qxv8l2COAHqQ",
			"progress": 0.21
		}]
	}
}
var viewModel = function (item) {
    var self = this;
    self.selected = ko.observable();
    self.Type = ko.computed(function() {
    var selected = self.selected();
    return selected && selected.items
        ? selected.items[0].name
        : 'Still waiting on data...';
}); 

    
    if (item) {
        ko.mapping.fromJS(item, {}, this);
    };
};

var model = new viewModel(complicateddata);
ko.applyBindings(model);