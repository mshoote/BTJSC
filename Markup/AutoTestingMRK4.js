//<script src="https://rawgit.com/mshoote/BTJSC/master/Markup/AutoTestingMRK4.js"></script>
//The following code is from https://github.com/bgrins/devtools-snippets and has been modified to work with our testing format with any framework design.
//The following function sets up the downloadable file of the Auto script nameing the downloadable file and the file type.

(function(console){
    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'pagingTime.txt'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)
//This function begins to create the data that the Auto script will be gathering to get the times
//of the webpage in the browser's Dev console. 
window.onload = function() {
	//Following function fixes the loadEventEnd time to give us a better timing.
	window.setTimeout(function(){
  // Check for browser support
    if(!(window.performance && window.performance.timing)) {
    return;
  }
  console.log(console.save([
	  // Total time from start to load
  performance.timing.loadEventEnd - performance.timing.fetchStart,
	  // Time consumed preparing the new page
  performance.timing.fetchStart - performance.timing.navigationStart,
	  // Time spent during redirection
  performance.timing.redirectEnd - performance.timing.redirectStart,
	  // AppCache Time
  performance.timing.domainLookupStart - performance.timing.fetchStart,
	  // DNS query time
  performance.timing.domainLookupEnd - performance.timing.domainLookupStart,
	  // TCP connection time
  performance.timing.connectEnd - performance.timing.connectStart,
	  // Time spent during the request
  performance.timing.responseEnd - performance.timing.requestStart,
	  // Time spent unloading documents
  performance.timing.unloadEventEnd - performance.timing.unloadEventStart,
	  // Time spent DOMContentLoaded 
  performance.timing.domContentLoadedEventEnd - performance.timing.domContentLoadedEventStart,
	  // Time spent constructing the DOM tree
  performance.timing.domComplete - performance.timing.domInteractive,
	  //Processing and loading time
  performance.timing.loadEventEnd - performance.timing.responseEnd,
	  // Request to completion of the DOM loading
  performance.timing.domInteractive - performance.timing.responseEnd,
	  // Load event time
  performance.timing.loadEventEnd - performance.timing.loadEventStart,
	  // Processing Time
  performance.timing.domComplete - performance.timing.domLoading,
	  //Painting time
  performance.timing.domContentLoadedEventStart - performance.timing.domLoading,
      //NULL is needed for the Perl script code to pull the data times properly.
  null
  ]));
  }, 0);
};
//This is the resfreshing function of the Auto script, the timer is set in millaseconds (1000 = 1 sec).

//setTimeout(function(){window.location=window.location;},60000); //60 seconds
//setTimeout(function(){window.location=window.location;},30000); //30 seconds
//setTimeout(function(){window.location=window.location;},20000); //20 seconds
//setTimeout(function(){window.location=window.location;},10000); //10 seconds
