const time = document.querySelector("#time");

const date = new Date().toLocaleString("in-en");

time.innerHTML = date;

window.onload = () => {
    setInterval(() => {
        const date = new Date().toLocaleString("in-en");
        time.innerHTML = date;
    }
    , 1000);
};
