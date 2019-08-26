axios.get("https://api.spacexdata.com/v3/launches/latest").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

