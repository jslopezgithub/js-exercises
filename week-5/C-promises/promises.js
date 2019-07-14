function cleanDishes() {
    return new Promise(function (resolve, reject) {
        resolve("Dishes Cleaned");
    });
}

function putAwayDishes() {
    return new Promise(function (resolve, reject) {
        resolve("Dishes Put Away");
    });
}

cleanDishes().then(function () {
    return putAwayDishes();
}).then(function (resolve) {
    console.log(resolve);
})

var downloadedImage = new Promise(function(resolve, reject) {
    resolve("Image downloaded");
});

function displayImage(image) {
    return new Promise(function(resolve, reject) {
        resolve("Image");
    });
}

downloadedImage.then(function(resolve) {
    return displayImage("Image");
}).then(function(resolve) { 
    console.log("Displaying " + resolve);
})