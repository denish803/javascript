
const oldValues = []

document.addEventListener("submit", (e) => {

    e.preventDefault()

    const randumNumber = Math.floor(Math.random() * 11)

    const userInput = e.target.number.value;

    if (userInput === "" || isNaN(userInput) || userInput < 0) {
        oldValues.push(userInput);
        document.getElementById("answer").innerHTML = `<span>Your Value is Invalid ${userInput}</span>`
        document.getElementById("prv-result").innerHTML = `<span>Your Old Guees Value ${oldValues}</span>`
        return;
    }

    if (userInput.id === randumNumber) {
        oldValues.push(userInput);
        document.getElementById("answer").innerHTML = `<span>You are valid Value Guees and You are a Win conguration : ${userInput}</span>`;
        document.getElementById("prv-result").innerHTML = `<span>Your Old Guees Value ${oldValues}</span>`
        return;
    }

    oldValues.push(userInput);
    document.getElementById("answer").innerHTML = `<span>You are wrong Value Guees Try agen: ${userInput}</span>`;
    document.getElementById("prv-result").innerHTML = `<span>Your Old Guees Value ${oldValues}</span>`
    return;
})