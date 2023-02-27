const arrayMail =['pippo@gmail.com', 'pluto@gmail.com', 'paperino@libero.it', 'topolino@yahoo.it'];

let email = prompt('Inserisci la tua email');
console.log(email);

let emails = false;
for(let i = 0; i < arrayMail.length; i++){
    if(email.toLowerCase() == arrayMail[i] ){
        emails = true;
        console.log('Email è gia esistente');
        i=arrayMail.length;
    }
}
if(!emails ){
    console.log('Email inserita correttamente');
}
