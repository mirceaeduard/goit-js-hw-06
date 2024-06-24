const form = document.querySelector('.login-form');
const loginData = {};

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please, all fields must be filled in!');
    } else {
        loginData['email'] = email.value;
        loginData['password'] = password.value;
        console.log(loginData);
        event.currentTarget.reset();
    }
};

form.addEventListener('submit', handleSubmit);
