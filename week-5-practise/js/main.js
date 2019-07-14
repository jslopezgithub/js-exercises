function changeColor(jumbotronColor, donateColor, volunteerColor, volunteerTextColor) {
    document.querySelector(".jumbotron").style.backgroundColor = jumbotronColor;
    document.getElementById("donateBtn").style.backgroundColor = donateColor;
    const volunteerButton = document.getElementById("volunteerBtn");
    volunteerButton.style.backgroundColor = volunteerColor;
    volunteerButton.style.color = volunteerTextColor;
}

document.getElementById("blueBtn").addEventListener("click", () => {
    changeColor("#588fbd", "#ffa500", "black", "white")
})

document.getElementById("orangeBtn").addEventListener("click", () => {
    changeColor("#f0ad4e", "#5751fd", "#31b0d5", "white")
});

document.getElementById("greenBtn").addEventListener("click", () => {
    changeColor("#87ca8a", "black", "#8c9c08", "white")
});

function markInvalid(input) {
    input.style.backgroundColor = "red";
}

document.getElementById("submitBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = ["exampleInputEmail1", "example-text-input", "exampleTextarea"]
        .map((id) => document.getElementById(id));
    let valid = true;
    inputs.forEach((input) => {
        if (input.value.length == 0) {
            markInvalid(input);
            valid = false;
        }
    });
    const emailInput = inputs[0];
    if (emailInput.value.indexOf("@") == -1) {
        markInvalid(input);
        valid = false;
    }
    if (valid) {
        alert("Thank you for filling out the form");
        inputs.forEach((input) => {
            input.value = "";
            input.style.backgroundColor = "white";
        });
    }
});
