document.getElementById("p1").innerHTML = "working!";
var change = true
function msg(){
   
    if (change == true){
        change = false;
    document.getElementById("p1").innerHTML = "changed to false";
    }else{
        document.getElementById("p1").innerHTML = "changed to true";
        change = true
    }
}