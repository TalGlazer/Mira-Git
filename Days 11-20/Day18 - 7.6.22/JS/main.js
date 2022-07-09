var rx = new RegExp("(?=.*d)(?=.*[a-z](?=.*[A-Z])(?=.*W)");
// var rx2 = /(?=.*\d)(?=.*[a-z](?=.*[A-Z])(?=.*\W)/
var str = "Tal123";

if(rx.test(str)) console.log("this is good")
else console.log("no good");