let player;
let pc;

player = Math.floor(Math.random()* 6 + 1)
pc = Math.floor(Math.random()* 6 + 1);

console.log(player, pc);

//determina il vincitore sostituendo la classe ed aggiungendo il testo nell'Id
message = 'hai pareggiato!';
if (player > pc){
  document.getElementById('gioco').className = 'verde';
  message = 'hai vinto!';
} else if (player < pc) {
  document.getElementById('gioco').className = 'rosso';
  message = 'Hai perso!';
} 

document.getElementById('gioco').innerHTML = message;