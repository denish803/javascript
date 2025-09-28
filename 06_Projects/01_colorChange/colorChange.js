

const colorValue = document.querySelectorAll(".color");
const body = document.body;

colorValue.forEach((color) => {

    color.style.backgroundColor = color.id;
    color.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id
    });
});