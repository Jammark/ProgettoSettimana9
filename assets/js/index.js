import { FirstUser, SecondUser, ThirdUser } from "./users.js";
console.log('Progetto settimana 9');
let users = [
    new FirstUser(40, 'Mario Rossi'),
    new SecondUser(65, 'Mauro Verdi'),
    new ThirdUser(53, 'Vittorio Testa')
];
let lista = users;
lista.forEach((user) => execute(user));
function execute(user) {
    user.chiamata(3 + Math.floor(Math.random() * 10));
    user.ricarica(10);
    user.chiamata(3 + Math.floor(Math.random() * 10));
    user.ricarica(20);
    console.log(`${user.descrizione()}\n` +
        `Credito residuo: ${user.numero404().toFixed(2)}\u20AC\n` +
        `Numero chiamate: ${user.getNumeroChiamate()}`);
    addToDom(user);
    user.azzeraChiamate();
    console.log(`Chiamate azzerate: ${user.getNumeroChiamate()}`);
}
function addToDom(user) {
    let container = document.getElementById('container');
    if (container) {
        container.innerHTML += user.getDomElement();
    }
}
