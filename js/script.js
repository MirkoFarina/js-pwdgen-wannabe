/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22*/

const nomeUtente = prompt('Qual è il tuo nome?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const coloreUtente = prompt('Qual è il tuo colore preferito?');

document.getElementById('password-generata').innerHTML= `
  La tua password generata (livello sicurezza = 0) è: <br>       
  <span class="white"> ${ nomeUtente}${cognomeUtente}${coloreUtente}22 </span> <br>
  <strong class="red"> ATTENZIONE LA PASSWORD SI AUTODISTRUGGERÁ NON APPENA LASCERAI QUESTA PAGINA !!!!!!!!!!!!!!!!!!!!!!!!!!!! </strong>
`;

document.getElementById('ps').innerHTML='P.S. ti consigliamo di usarla per il log-in in banca ;) &hearts;';

document.getElementById('scam').innerHTML= 'Made whit no scam <br> <strong> MirkoWebDev &hearts; <strong>'