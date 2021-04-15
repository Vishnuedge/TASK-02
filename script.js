// CREATE A REQUEST INSTANCE
var req  = new XMLHttpRequest();
// INITIATE THE CONNECTION or CREATE A CONNECTION
req.open('GET','https://restcountries.eu/rest/v2/all',true);
// SENDING THE REQUEST
req.send();
// LOAD THE FUNCTION
// THIS FUNCTION WILL TRIGGERED ONLY WHEN THE DATA IS RECEIVED SUCESSFULLY;
req.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
    console.log(data[i].name);
    }
}
