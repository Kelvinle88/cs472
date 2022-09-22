$(page);

function page() {
    let someimage = $(
        "<img>", {
            id: "image",
            src: "https://www.w3schools.com/w3css/img_lights.jpg"
        },
        "<img>", {
            id: "image",
            src: "https://www.w3schools.com/w3css/img_lights.jpg"
        });
    // $('#contact')[0].append(someimage[0]);
    $('.start').click(() => {
        $('.move').animate({top: 50}, "slow");
        $('.move').animate({left: 400}, "slow");
        $('.move').animate({top: 0}, "slow");
        $('.move').animate({left: 0}, "slow");
    });
    $('.stop').click(() => {
        $('.move').stop(true)
    });
    var textWrapper = document.querySelector('.h2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.h2 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
        }).add({
        targets: '.h2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}