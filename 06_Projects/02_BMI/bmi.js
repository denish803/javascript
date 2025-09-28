const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(e.target.height.value);
    const weight = parseFloat(e.target.weight.value);
    const result = document.querySelector("#result");

    if (height === "" || isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height!";
        result.style.color = "red"; 
        return;
    } else if (weight === "" || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight!";
        result.style.color = "red"; 
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `Your BMI is ${bmi}`;

    if (bmi < 18.5) {
        result.innerHTML += "<br>You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += "<br>You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML += "<br>You are overweight.";
    } else {
        result.innerHTML += "<br>You are obese.";
    }

});


console.log(form);