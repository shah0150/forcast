var scriptsLoaded = 0;

document.addEventListener("DOMContentLoaded",init)
  function init(){
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "main.css"); 
  //loads the CSS file and applies it to the page
  css.addEventListener("load", loadCount);
  document.querySelector("head").appendChild(css);



  var jq = document.createElement("script");
  jq.addEventListener("load", loadCount);
  jq.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
  document.querySelector("head").appendChild(jq);
  }
 


function buildWidget(cls){
  //now do the ajax call then build your page
  $.get("https://api.forecast.io/forecast/406fd76cc5d9be977cb52944ba413848/37.8267,-122.423"),
  onSuccess,
  "jsonp"
  );
}
function onSuccess(data){
  console.log("get data");
  console.log(data);
}
function loadCount(){
  scriptsLoaded++;
    if(scriptsLoaded === 2){
      //call the function in My widget script to load the JSON and build the widget
      buildWidget(".mywidget");
      console.log("both scripts loaded");
    }
}