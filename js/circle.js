var interval
var speed;
var numberCircle
var radius;
var count = 0;
var canvas;
var context;
let container = []
window.onload = load

function load() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    document.getElementById("startCircle").onclick = changeCircle
    canvas.addEventListener('click', removeCircle, false);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

function changeCircle() {
    interval = setInterval(function () {
        drawingCirle();
    }, speed)
}

function drawingCirle() {
    numberCircle = document.getElementById("number").value;
    speed = document.getElementById("speed").value;
    radius = document.getElementById("radius").value;
        if (count < numberCircle) {

            const centerX = Math.random() * canvas.width / 2;//canvas.width / 2;
            const centerY = Math.random() * canvas.height / 2;//canvas.height / 2;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
            container.push(context)
            count++;
        } else {
            stop()
        }
}

function removeCircle() {
    // var c = document.getElementById("myCanvas")
    // var ctx = c.getContext("2d");
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
}

function stop() {
    clearInterval(interval)
}
