const formLogin = document.querySelector("#form-login");
const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");

//Submit login
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    

    alert('Login de usuario ' + inputUser.value);
})

//Focus, Blur Inputs
inputUser.addEventListener('focus', () => {
    console.log('Focando input');
});

inputUser.addEventListener('blur', () => {
    console.log('Saindo input')
});

//Valida campo vazio

//Valida email