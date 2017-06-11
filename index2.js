function popup(){
	
	var overlay=document.getElementsByClassName('overlay');
	
	overlay[0].style.display='block';
}

function closed(){
	
	var overlay=document.getElementsByClassName('overlay');
	overlay[0].style.display='none';
}

function berubah(name){
	var p=document.getElementsByName(name);
	p[0].innerHTML += "BERUBAH";
}

