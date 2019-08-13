document.getElementById("p1").innerHTML = "working!";
var change = true

function msg() {

    if (change == true) {
        change = false;
        document.getElementById("p1").innerHTML = "changed to false";
    } else {
        document.getElementById("p1").innerHTML = "changed to true";
        change = true
    }

    for (let index = 0; index < 10; index++) {
        document.getElementById("p2").innerHTML += "</br> Loop number " + index + "\n";

    }


}

function changeColours() {
    for (let i = 0; i < 12; i++) {



        const canvas = document.getElementById("newCanvas" + i);
        var ctx = canvas.getContext('2d');
        var num = Math.floor(Math.random() * 200)

        ctx.fillStyle = 'rgb(' + num + ',' +
            Math.floor(Math.random() * 300) + ', ' +
            Math.floor(Math.random() * 300) + '';

        ctx.fillRect(0, 0, 300, 300);
    }

}