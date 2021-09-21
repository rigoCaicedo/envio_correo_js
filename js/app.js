//variables
let btnEnviar=document.querySelector('#enviar');
let email=document.querySelector('#email');
let asunto=document.querySelector('#asunto');
let mensaje=document.querySelector('#mensaje')

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}
//funciones
function iniciarApp(){
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        console.log('Hay algo');
    }else{
        e.target.classList.add('border','border-red-500');
    }
}