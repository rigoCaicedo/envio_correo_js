//variables
let btnEnviar=document.querySelector('#enviar');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
}
//funciones
function iniciarApp(){
    console.log('Iniciando la app');
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}