var complicateddata;
(function() {
  var jsonURL = "https://rawgit.com/mshoote/BTJSC/master/Markup/5KItems.js";
  $.getJSON( jsonURL, {
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      complicateddata = data;
      var model = new viewModel(complicateddata);
      ko.applyBindings(model);
    });
})();
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

