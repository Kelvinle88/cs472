var interval
var currentAnimation
var speed = 500
window.onload = pageload;

function pageload() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").onclick = Start
    document.getElementById("stop").onclick = Stop;
    document.getElementById("animation").onchange = ChangeAnimation
    document.getElementById("size").onchange = Changesize
    var speedcheck = document.getElementById("turbo")
    var currentspeed = speedcheck.value;
    speedcheck.onclick = (function(currentspeed) {
        return function () {
            speed = currentspeed
            if (interval) {
                clearInterval(interval);
            }
            if (document.getElementById("start").disabled) {
                interval = setInterval(function () {
                    DisplayFrame(currentAnimation);
                }, speed);
            }
        }
    })(currentspeed);
}

function ChangeAnimation() {
    var newAnimation = document.getElementById("animation").value;
    var textarea = document.getElementById("text-area");
    textarea.value = ANIMATIONS[newAnimation];
}

function Start() {
    document.getElementById("stop").disabled = false
    document.getElementById("start").disabled = true
    document.getElementById("animation").disabled = true
    var textarea = document.getElementById("text-area");
    var splitAnimation = textarea.value.split("=====\n")
    currentAnimation = splitAnimation;
    interval = setInterval(function () {
        DisplayFrame(currentAnimation);
    }, speed)

}

function DisplayFrame(animation) {
    var textarea = document.getElementById("text-area")
    var currentframe = animation.shift();
    textarea.value = currentframe;
    animation.push(currentframe)
    currentAnimation = animation
}

function Stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    ChangeAnimation();
    clearInterval(interval);
    document.getElementById("stop").disabled = true;
}


function Changesize() {
    var getsize = document.getElementById("size").value;
    document.getElementById("text-area").style.fontSize = getsize

}
