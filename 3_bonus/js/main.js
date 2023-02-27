const mailDom = document.getElementById('mail');

const btnDom = document.getElementById('btn');

const elencoEmailDom = document.getElementById('elenco-email');

const arrayMail =['pippo@gmail.com', 'pluto@gmail.com', 'paperino@libero.it', 'topolino@yahoo.it'];

btnDom.addEventListener('click',
    function(){
        let emails= false;
        for(let i = 0; i < arrayMail.length; i++){
            if((mailDom.value).toLowerCase() == arrayMail[i] ){
                console.log('Email è gia esistente');
                elencoEmailDom.innerHTML = "La mail che hai inserito è stata validata correttamente";
                emails = true;
                i=arrayMail.length;
            }
        }

        if(!emails ){
            console.log('Email inserita correttamente');
            elencoEmailDom.innerHTML = "La mail che hai inserito non è presente nella nostra lista";
        }
    }
   
)