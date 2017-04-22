import Ember from 'ember';

export default Ember.Route.extend({
		model(){
		
		// NON-HARDCODE solution
		var testData = '/jsonData/500Items.json';
		return Ember.$.getJSON(testData).then(function(td) {
      			return td.data.scheduleItems;
		});		
			
}
});
