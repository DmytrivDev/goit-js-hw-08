const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formTarget = event.target;
    const email = formTarget.elements.email.value.trim();
    const password = formTarget.elements.password.value.trim();

    if(email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        const formObject = {};

        formObject.email = email;
        formObject.password = password;

        console.log(formObject);
        formTarget.reset();
    }
}