var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/cute-dog.jpeg'){
		myImage.setAttribute('src','images/cute-dog2.jpeg');
	}else{
	    	myImage.setAttribute('src','images/cute-dog.jpeg');
	}
}

// Personalized welcome message code
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML="Welcome to P.P.L's Private Land,"+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeadinng.innerHTML="Welcome to P.P.L's Private Land,"+storedName;
}
myButton.onclick=function(){setUserName();}	   