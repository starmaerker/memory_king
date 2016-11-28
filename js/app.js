/*
var bild1 = "images/elefant.jpg";
var bild2 = "images/friends.jpg";
var bild3 = "images/lion.jpg";
var bild4 = "images/snake.jpg";
var bild5 = "images/sun.jpg";
var bild6 = "images/zebra.jpg";
var bild7 = "images/panda.jpg";
var bild8 = "images/maus.jpg";
var bild9 = "images/dino.jpg";
var bild10 = "images/bird.jpg";
*/
var bild1 = "images/insects_1.jpg";
var bild2 = "images/insects_2.jpg";
var bild3 = "images/insects_3.jpg";
var bild4 = "images/insects_4.jpg";
var bild5 = "images/insects_5.jpg";
var bild6 = "images/insects_6.jpg";
var bild7 = "images/insects_7.jpg";
var bild8 = "images/insects_8.jpg";
var bild9 = "images/insects_9.jpg";
var bild10 = "images/insects_10.jpg";

var highscore1 = [];
var highscore2 = [];
var highscore3 = [];

/*

var locHigh1
var locHigh2
var locHigh3

*/

var arr = [bild1,bild2,bild3,bild4,bild5,bild6,bild7,bild8,bild9,bild10];
// var arr = [];
var arrShuffle;
var testarr = [];
var testid = [];
var picarr = [];
var matrix;
var classname = document.getElementsByClassName("card");


var timeCounter = 0; // time counter
var action; //var for setInterval
var lapNumber = 0;//Number of laps
var timeMinutes, timeSeconds, timecentiSeconds;

shuffle(arr);

addListen(classname);



function generate(zahl) {
	picarr = arr.slice(0,zahl);
	picarr = doublearr(picarr);
	shuffle(picarr);
	console.log("picarr: " + picarr);
	

	for (var i=0; i<picarr.length; i++) {
		//document.getElementById("box"+(i+1)).innerHTML = '<img src=' + picarr[i] + '>';
		document.getElementById("box"+(i+1)).innerHTML = "";
		document.getElementById("box"+(i+1)).style.background = "lightblue";
		document.getElementById("box"+(i+1)).style.display = "block";
}

}

function setCardStyle(zahl) {
	var test = document.getElementsByClassName("card");
	for (var i=0; i<zahl; i++) {
		test[i].style.width = "17%";
		test[i].style.height = "22%";
	}
}

document.getElementById("6p").onclick = function() {
  generate(6);
  document.getElementById("startbild").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("container").style.width = "60%";
  document.getElementById("mem").style.display = "none";
  document.getElementById("6p").style.display = "none";
  document.getElementById("8p").style.display = "none";
  document.getElementById("10p").style.display = "none";
  startAction();
  
  
  
}

document.getElementById("8p").onclick = function() {
  generate(8);
  
  document.getElementById("startbild").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("container").style.width = "60%";
  document.getElementById("container").style.height = "90%";
  document.getElementById("mem").style.display = "none";
  document.getElementById("6p").style.display = "none";
  document.getElementById("8p").style.display = "none";
  document.getElementById("10p").style.display = "none";
  startAction();
  
}

document.getElementById("10p").onclick = function() {
  generate(10);
  document.getElementById("startbild").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("container").style.width = "80%";
  setCardStyle(20);
  document.getElementById("mem").style.display = "none";
  document.getElementById("6p").style.display = "none";
  document.getElementById("8p").style.display = "none";
  document.getElementById("10p").style.display = "none";
  startAction();  
  
}

document.getElementById("restart").onclick = function() {
  /* for (var i=0; i<arr.length; i++) {
  document.getElementById("box"+(i+1)).innerHTML = '<img src=' + arr[i] + '>';
  //document.getElementById("box"+(i+1)).style.background = "lightblue";
  
}
*/
	clearInterval(action);
	location.reload();
}

function addClicks() {
	testid.push(this.id);
	var num = convert(this.id);
	var temp = picarr[Number(num)-1];
	testarr.push(temp);
	
	document.getElementById(this.id).innerHTML = '<img src=' + temp + '>';
	
	console.log("arr: " + arr);	
	console.log("this.id: " + this.id);
	console.log("temp: " + temp);
	console.log("testid: " + testid);
	console.log("testarr: " + testarr);
	console.log("visible: " + visible());
	
	if ((visible() == 1) && (testarr[testarr.length-2] == testarr[testarr.length-1]) && (testid.length % 2 == 0)) {
		document.getElementById(testid[testid.length-1]).innerHTML = "";
		
	} else if ((visible() == 2) && (testarr[testarr.length-2] !== testarr[testarr.length-1])) {
	   remListen(classname);
	   
	   setTimeout(function() {
		document.getElementById(testid[testid.length-2]).innerHTML = "";
		document.getElementById(testid[testid.length-1]).innerHTML = ""; 
		addListen(classname);
		}, 1000);
		
   } else if ((visible() == 2) && (testarr[testarr.length-2] === testarr[testarr.length-1])){
	   
	   remListen(classname);
	   
	   setTimeout(function() {
		document.getElementById(testid[testid.length-1]).style.visibility = "hidden";
		document.getElementById(testid[testid.length-2]).style.visibility = "hidden";
		
		addListen(classname);
		
		if (invisible(picarr) === true) {
			clearInterval(action);
			document.getElementById("score").innerHTML = "Your score is: " + format(timeMinutes) + ":" + format(timeSeconds)+ ":" + format(timecentiSeconds);
			addHighscore(timeCounter);
			high(picarr.length);
   }
		
		}, 1500);
	   
   }
   
   
  
}

function high(len) {
	document.getElementById("highscore").innerHTML = "Highscore";
	if (len === 12) {
		var temp1 = JSON.parse(localStorage.getItem("locHigh1"));
		if (typeof(temp1) === "number") {
			var textnode = document.createTextNode("1: " + temp1);
			document.getElementById("highscore").appendChild(textnode);
		} else {
			for (var i=0; i<temp1.length; i++) {
				var textnode = document.createTextNode((i+1) + ": " + temp1[i]);
				document.getElementById("highscore").appendChild(document.createElement("br"));
				document.getElementById("highscore").appendChild(textnode);
			}
		}
	} else if (len === 16) {
		var temp2 = JSON.parse(localStorage.getItem("locHigh2"));
		if (typeof(temp2) === "number") {
			var textnode = document.createTextNode("1: " + temp2);
			document.getElementById("highscore").appendChild(textnode);
		} else {
			for (var j=0; j<temp2.length; j++) {
				var textnode = document.createTextNode((j+1) + ": " + temp2[j]);
				document.getElementById("highscore").appendChild(document.createElement("br"));
				document.getElementById("highscore").appendChild(textnode);
			}
		}
	}
	  else if (len === 20) {
		  var temp3 = JSON.parse(localStorage.getItem("locHigh3"));
		  if (typeof(temp3) === "number") {
			var textnode = document.createTextNode("1: " + temp3);
			document.getElementById("highscore").appendChild(textnode);
		} else {
			for (var k=0; k<temp3.length; k++) {
				var textnode = document.createTextNode((k+1) + ": " + temp3[k]);
				document.getElementById("highscore").appendChild(document.createElement("br"));
				document.getElementById("highscore").appendChild(textnode);
			}
		}
	  }
}

function doublearr(array) {
	var test = [];
	for (var i=0; i<array.length; i++) {
		test.push(array[i]);
		test.push(array[i]);
	}
	return test;
}

function invisible(len) {
	var z = 0;
	for (var i=0; i<len.length; i++) {
		
		if (document.getElementById("box"+(i+1)).style.visibility === "hidden") {
			z++;
		}
	}
	console.log("z: " + z);
	if (z === len.length) {
		return true;
	} else {
		return false;
	}
}



function visible() {
	var x = 0;
	for (var j=1; j<=20; j++) {
		if ((document.getElementById("box" + j).innerHTML !== "") && (document.getElementById("box" + j).style.visibility !== "hidden")) {
			x++;
		}
	}
	return x;
}

function shuffle(a) {
    var j, x, i;
	
    for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
/*
function paint() {
  //shuffle(arr);
  
  for (var i=0; i<arr.length; i++) {
    document.getElementById("box"+(i+1)).innerHTML = "";
	document.getElementById("box"+(i+1)).style.background = "lightblue";
  }
   
}
*/


function addListen(classN) {
  for (var j=0; j<classN.length; j++) {
  classN[j].addEventListener('click', addClicks)
 }
}


function remListen(classN) {
	
  for (var j=0; j<classN.length; j++) { 
    classN[j].removeEventListener('click', addClicks)
    }
  }


function convert(id) {
  return id.replace(/^\D+/g, "");
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function startAction() {
    action = setInterval(function() {
      timeCounter++;
      if (timeCounter == 2*60*100) {
        timeCounter = 0;
      }
      
      updateTime();
    }, 10);
    
  }
  
  function format(number) {
    if (number<10) {
      return '0' + number;
    } else {
        return number;
    }
  }
  
  function updateTime() {
    //1min= 60*100centiseconds=6000centiseconds
    timeMinutes = Math.floor(timeCounter/6000);
    //1sec=100centiseconds
    timeSeconds = Math.floor((timeCounter%6000)/100);
    timecentiSeconds = (timeCounter%6000)%100;
    
    document.getElementById("timeMinute").innerHTML = format(timeMinutes);
    document.getElementById("timeSecond").innerHTML = format(timeSeconds);
    document.getElementById("timecentiSecond").innerHTML = format(timecentiSeconds);
    
  }
  
  function addHighscore(counter) {
	  if (picarr.length === 12) {
		  if (localStorage.getItem("locHigh1") === null) {
				localStorage.setItem("locHigh1", counter);
		  } else {
				var temp1 = localStorage.getItem("locHigh1");
				localStorage.setItem("locHigh1", JSON.stringify(checkHigh(counter, temp1)));
		  }
		}
		  
		  
	    else if (picarr.length === 16) {
		  if (localStorage.getItem("locHigh2") === null) {
				localStorage.setItem("locHigh2", counter);
		  } else {
				var temp2 = localStorage.getItem("locHigh2");
				localStorage.setItem("locHigh2", JSON.stringify(checkHigh(counter, temp2)));
		  }

	    } 
	    else if (picarr.length === 20) {
		  if (localStorage.getItem("locHigh3") === null) {
				localStorage.setItem("locHigh3", counter);
		  } else {
				var temp3 = localStorage.getItem("locHigh3");
				localStorage.setItem("locHigh3", JSON.stringify(checkHigh(counter, temp3)));
		  }
       }
	  } 
  
  
  function checkHigh(counter, localStore) {
	  var z = [];
	  var temp = JSON.parse(localStore);
	  if (typeof(temp) === "number") {
		 z.push(counter, temp);
		 return z.sort(function(a, b){return a-b});
	  } else if (temp.length<10) {
		  temp.push(counter);
		  return temp.sort(function(a, b){return a-b});
	  } else {
		  for (var i=0; i<temp.length; i++) {
			if (counter < temp[i]) {
			  temp.splice(i,0,counter);
			  temp.pop();
			  return temp;
		  } 
		  
	    }
		return temp;
	}
  }
	  
	   
  
  /*
  function formatHighscore() {
	  if (score > parseInt(localStorage.getItem("highscore"))) {
		localStorage.setItem("highscore", score);
	  }
	  
  }
  */