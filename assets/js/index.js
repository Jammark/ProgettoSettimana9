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
    user.chiamata(3 + Math.random() * 10);
    user.ricarica(10);
    user.chiamata(3 + Math.random() * 10);
    user.ricarica(20);
    console.log(`${user.descrizione()}\n` +
        `Credito residuo: ${user.numero404()}\n` +
        `Numero chiamate: ${user.getNumeroChiamate()}`);
    user.azzeraChiamate();
    console.log(`Chiamate azzerate: ${user.getNumeroChiamate()}`);
}
