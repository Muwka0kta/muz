HTMLAudioElement.prototype.stop = function() 
{ 
this.pause(); 
this.currentTime = 0.0; 
}

document.onkeydown = function(e) { 

switch (e.keyCode) {
  case 65:
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[0].play();
    break;
  case 83:
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[1].play();
    break;
  case 68:
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[2].play();
    break;
  case 70:
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[3].play();
    break;
  case 71:
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[5].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[4].play();
    break;
  case 72:
    document.getElementsByTagName('audio')[5].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
	document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[5].play();
    break;
  case 74:
    document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[6].play();
    break;
  case 75:
    document.getElementsByTagName('audio')[7].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
    document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[8].stop();
	document.getElementsByTagName('audio')[7].play();
	
    break;
  case 76:
    document.getElementsByTagName('audio')[8].stop();
    document.getElementsByTagName('audio')[0].stop();
    document.getElementsByTagName('audio')[1].stop();
    document.getElementsByTagName('audio')[2].stop();
    document.getElementsByTagName('audio')[3].stop();
    document.getElementsByTagName('audio')[4].stop();
    document.getElementsByTagName('audio')[5].stop();
    document.getElementsByTagName('audio')[6].stop();
    document.getElementsByTagName('audio')[7].stop();
	document.getElementsByTagName('audio')[8].play();
    break;
}
}