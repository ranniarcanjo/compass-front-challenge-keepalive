const formLogin = document.querySelector("#form-login");
const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");
const iconUser = document.querySelector("#icon-user");
const iconPass = document.querySelector("#icon-pass");
const msgError = document.querySelector(".msg-erro");
//const btnLogoff = document.querySelector("#btn-logoff");

const user = "admin@compasso.com.br";
const pass = "admin";

let validUser = false;
let validPass = false;

let userObj = {};

const getLogin = () => JSON.parse(localStorage.getItem('userLogin')) ?? {};
const setLogin = (userObj) => JSON.parse(localStorage.setItem('userLogin', JSON.stringify(userObj)))

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    validaForm();
});

inputUser.addEventListener('focus', () => {
    iconUser.classList.add('icon-user');
});

inputUser.addEventListener('blur', () => {
    iconUser.classList.remove('icon-user')
    if(inputUser.value){
        iconUser.classList.add('icon-user');   
        inputUser.classList.remove("field-error");
        validUser = true;
    }
    
});

inputPass.addEventListener('focus', () => {
    iconPass.classList.add('icon-pass');
});

inputPass.addEventListener('blur', () => {
    iconPass.classList.remove('icon-pass')
    if(inputPass.value != ""){
        iconPass.classList.add('icon-pass'); 
        inputPass.classList.remove("field-error");
        validPass = true; 
    }
});

// btnLogoff.addEventListener('click', () => {
//     alert('Fazer logof');
// })

function validaForm(){
    let valid = true;
    if (validUser && validPass){
        logar();  
        valid = true
    }else{
        inputUser.classList.add("field-error");
        inputPass.classList.add("field-error");
        msgError.innerHTML = "Ops, campo(s) vazio(s), ou formato incorreto!";
        valid = false;
    }
    return valid;
}

function logar() {

    if(inputUser.value === user && inputPass.value === pass){
        userObj = {
            user: user,
            pass: pass
        }

        setLogin(userObj);
        window.location.href = "home.html";
        msgError.innerHTML = "";

    }else{
        msgError.innerHTML = "Ops, usuário ou senha inválidos. \n Tente novamente!"; 
    }

}

function logoff(){
    console.log('Objeto em localstorage', getLogin())
}

function removeLocalStorage(){

}

//Valida email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}