const mailDom = document.getElementById('mail');

const btnDom = document.getElementById('btn');

const elencoEmailDom = document.getElementById('elenco-email');

btnDom.addEventListener('click',
    function(){
        elencoEmailDom.innerHTML= mailDom.value;
    }
)