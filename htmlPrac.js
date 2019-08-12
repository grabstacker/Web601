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

    for (let index = 0; index < 10; index++) {
       document.getElementById("p2").innerHTML += "</br> Loop number " + index + "\n";
        
    }
}