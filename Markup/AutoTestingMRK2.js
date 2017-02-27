(function(console){
    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

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
  // Check for browser support
  if(!(window.performance && window.performance.timing)) {
    return;
  }
 //console.log(console.save(performance.timing));
 //This allows us to get the excate times we are wanting, but there are issues with loadEventEnd time being set to 0.
 console.log(console.save([performance.timing.connectEnd - performance.timing.navigationStart,
 performance.timing.responseEnd - performance.timing.requestStart,
 performance.timing.domComplete - performance.timing.domLoading,
 performance.timing.loadEventEnd - performance.timing.navigationStart,
 performance.timing.responseEnd - performance.timing.fetchStart,
 performance.timing.loadEventEnd - performance.timing.responseEnd]));
};
setTimeout(function(){window.location=window.location;},5000);
