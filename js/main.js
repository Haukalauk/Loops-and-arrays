var button = document.querySelector("button");
var titleInput = document.querySelector("#titill");
var picInput = document.querySelector("#pic");
var strengthInput = document.querySelector("#strength");
var bragdInput = document.querySelector("#tastes");
var recoInput = document.querySelector("#recom");
var myDiv = document.querySelector("div");
button.onclick = function(){
    myDiv.innerHTML += `
        <h1>${titill.value}</h1>
		<p>Er með ${strength.value}/10 hita styrkleika</p>
		<p>Bragðlýsing: <i>${tastes.value}</i></p>
		<p>Mælt með: <b>${recom.value}</b></p>
    `
    titleInput.value="";
    picInput.value="";
    strengthInput.value="";
    bragdInput.value="";
    recoInput.value="";

}

var myDiv = document.querySelector("div");
var names = ["The Last Dab", "Zombie Apocalypse", "HEATONIST #1", "Fiery Fool", "Exhorresco"]
var styrkleiki = [10 ,8 ,9 ,9 ,9];
var photos = ["images/hotone1.jpg" , "images/hotone2.jpg" , "images/hotone3.jpg", "images/hotone4.jpg" , "images/hotone5.jpg" ]
var taste = ["Scorching fruit. Sensational", "Pepper dense. Citrus. Complex heat", "Floral complex. Full bodied", "Tomatoes. Peppery hot", "7-Pot. Citrus. Caribbean"]
var should = ["Já" , "Já" , "Nei" , "Já" , "Nei"]
console.log(names);
for(var i = 0; i<names.length; i++){
	myDiv.innerHTML += `
        <h1>${names[i]}</h1>
        <img src="${photos[i]}" />
		<p>Er með ${styrkleiki[i]}/10 hita styrkleika</p>
		<p>Bragðlýsing: <i>${taste[i]}</i></p>
		<p>Mælt með:<b> ${should[i]}</b></p>
    `
}

