var bild1 = "images/elefant.jpg";
var bild2 = "images/friends.jpg";
var bild3 = "images/lion.jpg";
var bild4 = "images/snake.jpg";
var bild5 = "images/sun.jpg";
var bild6 = "images/zebra.jpg";


var arr = [bild1,bild1,bild2,bild2,bild3,bild3,bild4,bild4,bild5,bild5,bild6,bild6];
var arrShuffle;
var testarr = [];
var testid = [];
var zwsp = [];
var classname = document.getElementsByClassName("card");
var z = 0;


addListen(classname);

for (var i=0; i<arr.length; i++) {
  document.getElementById("box"+(i+1)).innerHTML = '<img src=' + arr[i] + '>';
  document.getElementById("box"+(i+1)).style.background = "lightblue";
}

document.getElementById("shuffle").onclick = function() {
  paint();
  testarr = [];
  testid = [];
  
}

document.getElementById("start").onclick = function() {
  /* for (var i=0; i<arr.length; i++) {
  document.getElementById("box"+(i+1)).innerHTML = '<img src=' + arr[i] + '>';
  //document.getElementById("box"+(i+1)).style.background = "lightblue";
  
}
*/
	location.reload();
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

function paint() {
  shuffle(arr);
  
  for (var i=0; i<arr.length; i++) {
    document.getElementById("box"+(i+1)).innerHTML = "";
	document.getElementById("box"+(i+1)).style.background = "lightblue";
  }
   
}

function test(clickedid) {
  console.log("clickedid: " + clickedid);
  var num = convert(clickedid);
  var temp = arr[Number(num)-1];
  testarr.push(temp);
  
  
  document.getElementById(clickedid).innerHTML = '<img src=' + temp + '>';
  
  
  z = 0;
    for (var j=1; j<=12; j++) {
		if ((document.getElementById("box" + j).innerHTML !== "") && (document.getElementById("box" + j).style.visibility !== "hidden")) {
			z++;
		}
	}
 
	
   
 
  
  /*
  if (testid.length % 2 !== 0) {
	  if (testid.length > 2) {
		document.getElementById(testid[testid.length-2]).innerHTML = "";
		document.getElementById(testid[testid.length-3]).innerHTML = ""; 
	  }
  } 
  */  
  
   
   
    
  
  //console.log("z2: " + z);
  if ((testarr[testarr.length-2] === testarr[testarr.length-1]) &&
     (testid[testid.length-2] !== testid[testid.length-1]) && (z === 2))
    {
    
	remListen(classname);
    document.getElementById(testid[testid.length-2]).innerHTML = '<img src=' + arr[convert(testid[testid.length-2])-1] + '>';
    document.getElementById(testid[testid.length-1]).innerHTML = '<img src=' + arr[convert(testid[testid.length-1])-1] + '>';
	setTimeout(function() {
	document.getElementById(testid[testid.length-1]).style.visibility = "hidden";
    document.getElementById(testid[testid.length-2]).style.visibility = "hidden";
	addListen(classname);
	}, 1500);
	z = 0;
  }
   
}



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

function addClicks() {
	testid.push(this.id);
	console.log("Z:"+ z);
	if (z>=2) {
	  
		document.getElementById(testid[testid.length-2]).innerHTML = "";
		document.getElementById(testid[testid.length-3]).innerHTML = ""; 
		z = 0;
	  }
  
  
  console.log("testid: " + testid);
  //console.log("testarr: " + testarr);
  //console.log("z1: " + z);
  if ((testid[testid.length-2] !== testid[testid.length-1])) {
	
	test(this.id);
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