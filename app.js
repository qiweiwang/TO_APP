var myWindow;
var myDoc;
var popCounter = 10

function loadPage() {
    myWindow = window;
    myDoc = document;
    myDoc.getElementById('hw').innerHTML = 'hello world';
    timeout.newTimer(5, redirectWarn);
}

function redirectWarn(){
    $('#redirectWarnModal').modal('show');
    countDown();
    myWindow.setTimeout(popWindow, popCounter*1000);
}

function countDown(){
  popCounter--;
  if (popCounter < 0){
    $('#redirectWarnModal').modal('hide');
  } else{
    myDoc.getElementById('timeleft').innerHTML = popCounter;
    setTimeout(countDown, 1000);
  }
}

function popWindow(){
  var newWindow = window.open("http://www.google.com", "", "width=640,height=480");
}
