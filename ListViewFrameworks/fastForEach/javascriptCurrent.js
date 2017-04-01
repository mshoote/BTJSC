var data = {performedByName:"xzzKCV9EUs",id:8480,title:"Ls1heJge9Sd46IMI87foM701tWIocAAWDuk6hZ36pPSsImVD7i",duration:1,jobColor:"#435130",jobId:2227104,isMarkedComplete:true,builderID:1,scheduleColor:"#435130",startDate:"2017-01-23T19:59:40.4090732Z",startDateShowTime:true,endDate:"2017-01-23T19:59:40.4090732Z",endDateShowTime:true,confirmStatus:"True"};

var viewModel = function (item) {
    var self = this;
    self.Type = ko.observable(); 

    
    if (item) {
        ko.mapping.fromJS(item, {}, this);
    };
};

var model = new viewModel(data);
ko.applyBindings(model);