const form = document.querySelector(".form");

const nameee = document.querySelector("#name");
const nameText = nameee.value;

const secondName = document.querySelector("#secondName");
const secondNameText = secondName.value;

const email = document.querySelector("#email");
const emailText = email.value;

const phone = document.querySelector("#phone");
const phoneText = phone.value;

const agree = document.querySelector("#agree").checed;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Здесь твой код
    fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: OlgaKovalevskayaa'
            },
            body: JSON.stringify({
                "name": `${nameText}`,
                "secondName": `${secondNameText}`,
                "phone": `${emailText}`,
                "email": `${phoneText}`,
                "agree": `${agree}`
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data)
        })

});