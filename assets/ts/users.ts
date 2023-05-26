import {Smartphone} from './smartphone.js'

export class User{
    static tariffa:number = 0.20;
    carica:number;//euro disponibili per le chiamate
    numeroChiamate:number;//num chiamate effettuate

    constructor(_carica: number){
        this.carica = _carica;
        this.numeroChiamate = 0;
    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica;
    }//incrementare carica

    public chiamata(minutiDurata:number):void{
        this.numeroChiamate++;
        this.carica-= +(minutiDurata * User.tariffa).toFixed(2);
    }//aggiornare carica increm numero chiamate

    public numero404():number{
        return this.carica;
    }//restituisce carica disponibile

    public getNumeroChiamate():number{
        return this.numeroChiamate;
    }//restituisce valore variabile numeroChiamate

    public azzeraChiamate():void{
        this.numeroChiamate = 0;
    }//azzera variabile numeroChiamate

    public descrizione():string{
        return '';
    }
}

export class FirstUser extends User implements Smartphone{
    static operatore: string = 'TIM';
    private nome: string;

    constructor(carica:number, _nome:string){
        super(carica);
        this.nome = _nome;
    }

    public descrizione():string{
        return `Primo utente, ${this.nome}\n`+`operatore telefonico ${FirstUser.operatore}`;
    }
}

export class SecondUser extends User implements Smartphone{
    static operatore: string = 'Wind-3';
    private nome: string;

    constructor(carica:number, _nome:string){
        super(carica);
        this.nome = _nome;
    }

    public descrizione():string{
        return `Secondo utente, ${this.nome}\n`+`operatore telefonico ${SecondUser.operatore}`;
    }
}

export class ThirdUser extends User implements Smartphone{
    static operatore: string = 'Vodafone';
    private nome: string;

    constructor(carica:number, _nome:string){
        super(carica);
        this.nome = _nome;
    }

    public descrizione():string{
        return `Terzo utente, ${this.nome}\n`+`operatore telefonico ${ThirdUser.operatore}`;
    }
}