$(document).ready(() => {
    document.getElementById('myCarousel').onclick = function () {
      alert("Under Construction");
    } 
    document.getElementById('myCarousel').onclick = function () {
        alert("Under Construction");
    }
    document.getElementById('').onclick = function () {
        alert("Elon Musk wants to know your location");
      } 
    
})
axios.get("https://api.spacexdata.com/v3/launches/latest").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

// window.axios.get("https://api.spacexdata.com/v3/info").then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// addEventListener() 
