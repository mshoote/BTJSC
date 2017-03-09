//<script src="https://rawgit.com/mshoote/BTJSC/master/Markup/AutoTestingMRK2.js"></script>
//The following code is from https://github.com/bgrins/devtools-snippets
(function(console){
    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'dataTime.json'

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
window.onload = function() {
    //Following function fixes the loadEventEnd time to give us a better timing.
    window.setTimeout(function(){
  // Check for browser support
  if(!(window.performance && window.performance.timing)) {
    return;
  }
  //This function will send the performance timing to a JSON file to be downloaded.
 //console.log(console.save(performance.timing));
 
 //This allows us to get the excate times we are wanting.
 console.log(console.save([performance.timing.connectEnd - performance.timing.navigationStart,
 performance.timing.responseEnd - performance.timing.requestStart,
 performance.timing.domComplete - performance.timing.domLoading,
 performance.timing.loadEventEnd - performance.timing.navigationStart,
 performance.timing.responseEnd - performance.timing.fetchStart,
 performance.timing.loadEventEnd - performance.timing.responseEnd]));
    }, 0);
};
//Allows you to set a time(in seconds) for refreshing the page.
setTimeout(function(){window.location=window.location;},50000);
