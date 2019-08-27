var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 400;
ml4.durationOut = 300;
ml4.delay = 200;

anime.timeline({ loop: true })
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: 600,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-4',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: 300
    }).add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: 1900,
        easing: "easeInExpo",
        delay: 1400
    }).add({
        targets: '.ml4 .letters-5',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: 4000
    }).add({
        targets: '.ml4 .letters-5',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: 19000,
        easing: "easeInExpo",
        delay: 3000
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 2000,
        delay: 2000
    });

setTimeout(() => {
    document.getElementById('go').remove()
}, 7500)

function AlertIt() {
    var answer = confirm("Elon Musk wants to know your location!")
    if (answer) {
        window.open("https://www.google.com/maps?saddr=My+Location&daddr=SpaceX+Launch+and+Landing+Control+Center,+Spaceport+Way,+Cape+Canaveral,+FL", '_blank');
    }
}

$(document).ready(() => {

    document.getElementById('myCarousel').onclick = function () {
        alert("Under Construction");
    }
    // document.getElementById('go').onwaiting = function () {
    //     countdown();
    // }

    // document.getElementsByClassName('mars').onclick = function () {
    //     alert("Elon Musk wants to know your location");
    // // }
   

})

// const charactersAPI = new APIHandler("https://api.spacexdata.com/v3")

// $(document).ready(() => {
//     document.getElementById('fetch-all').onclick = function () {

//     })