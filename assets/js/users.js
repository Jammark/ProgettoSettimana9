class User {
    constructor(_carica) {
        this.carica = _carica;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    } //incrementare carica
    chiamata(minutiDurata) {
        this.numeroChiamate++;
        let tmp = this.carica - minutiDurata * User.tariffa;
        this.carica = Math.round((tmp) * 100) / 100;
    } //aggiornare carica increm numero chiamate
    numero404() {
        return this.carica;
    } //restituisce carica disponibile
    getNumeroChiamate() {
        return this.numeroChiamate;
    } //restituisce valore variabile numeroChiamate
    azzeraChiamate() {
        this.numeroChiamate = 0;
    } //azzera variabile numeroChiamate
    descrizione() {
        return '';
    }
    getDomElement() {
        return `<div class="el">
        <h1>${this.descrizione().split(',').join('</br>')}</h1>
        <h2>Credito residuo: ${this.numero404().toFixed(2)}\u20AC</h2>
        <h2>Numero chiamate: ${this.getNumeroChiamate()}</h2>
        </div>`;
    }
}
User.tariffa = 0.20;
export { User };
class FirstUser extends User {
    constructor(carica, _nome) {
        super(carica);
        this.nome = _nome;
    }
    descrizione() {
        return `Primo utente, ${this.nome},\n` + `operatore telefonico ${FirstUser.operatore}`;
    }
}
FirstUser.operatore = 'TIM';
export { FirstUser };
class SecondUser extends User {
    constructor(carica, _nome) {
        super(carica);
        this.nome = _nome;
    }
    descrizione() {
        return `Secondo utente, ${this.nome},\n` + `operatore telefonico ${SecondUser.operatore}`;
    }
}
SecondUser.operatore = 'Wind-3';
export { SecondUser };
class ThirdUser extends User {
    constructor(carica, _nome) {
        super(carica);
        this.nome = _nome;
    }
    descrizione() {
        return `Terzo utente, ${this.nome},\n` + `operatore telefonico ${ThirdUser.operatore}`;
    }
}
ThirdUser.operatore = 'Vodafone';
export { ThirdUser };
