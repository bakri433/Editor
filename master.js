var code = document.getElementById("codes");
var result= document.getElementById("results");
var show = document.getElementById("true");
var remove = document.getElementById("false");
var save = document.getElementById("save");
var removesave = document.getElementById("remove")
show.onclick= function(){
    result.innerHTML= code.value;
   
};
remove.onclick=function(){
    code.value="";
  result.innerHTML="";
};

save.onclick = function(){
  localStorage.setItem("result",code.value);

};
removesave.onclick = function(){
localStorage.clear();
};
onload= function(){
code.value= localStorage.getItem("result");

};

