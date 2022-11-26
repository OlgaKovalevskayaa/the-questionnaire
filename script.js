const form = document.querySelector(".form");
const nameee = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector('#agree');
let valueAgree;

agree.addEventListener("change", function() {
    if (this.checked) {
        valueAgree = true;
    } else {
        valueAgree = false;
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameText = nameee.value;
    const secondNameText = secondName.value;
    const emailText = email.value;
    const phoneText = phone.value;
    // Здесь твой код
    fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: OlgaKovalevskayaa'
            },
            body: JSON.stringify({
                name: (`${nameText}`),
                secondName: (`${secondNameText}`),
                phone: (`${emailText}`),
                email: (`${phoneText}`),
                agree: (`${valueAgree}`)
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data)
            alert("Запись успешно внесена")
        })
        .catch((error) => {
            console.log(error);
            alert("Ошибка")
        });
    document.querySelector(".form").reset();
});




//В случае успешной отправки данных показывай пользователю уведомление. Реализация на твой вкус, но лучше подойти к делу творчески и выйти за пределы обычного alert'a.



//Получение данных
//Для самопроверки ты можешь использовать следующие адреса:
//http://46.21.248.81:3001/my-users — получить всех своих пользователей
//http://46.21.248.81:3001/last-user — получить последнего добавленного пользователя
//Оба запроса — GET. Также не забывай передавать заголовок авторизации. Без него сервер не поймет, чьих пользователей нужно вернуть.
//fetch('http://46.21.248.81:3001/my-users', {
//headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json',
//     'Authorization': 'Bearer: OlgaKovalevskayaa'
//},
//})
// .then((result) => {
//    return result.json()
// })
// .then((data) => {
//    console.log(data)
// })