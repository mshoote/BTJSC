//<script src="https://rawgit.com/mshoote/BTJSC/master/Markup/AutoTestingMRK3.js"></script>
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
window.onload = function() {
	window.setTimeout(function(){
  // Check for browser support
    if(!(window.performance && window.performance.timing)) {
    return;
  }
  console.log(console.save([performance.timing.domComplete - performance.timing.domLoading,
  performance.timing.domContentLoadedEventEnd -performance.timing.domContentLoadedEventStart,
  performance.timing.loadEventEnd - performance.timing.loadEventStart,
  performance.timing.loadEventEnd - performance.timing.responseEnd,
  performance.timing.domContentLoadedEventStart - performance.timing.domLoading]));
  }, 0);
 };
 setTimeout(function(){window.location=window.location;},50000);
