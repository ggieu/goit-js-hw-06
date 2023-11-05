const result = {};



const form = document.querySelector(".login-form");
const defaultFromFunction = () => {
    event.preventDefault();
    const { email, password } = form.elements
    const dataForm = {
        email: email.value,
        password: password.value,
    }
    email.value === "" || password.value === "" ? alert("всі поля повинні бути заповнені") : (console.log(dataForm), form.reset());

}
form.addEventListener("submit", defaultFromFunction)