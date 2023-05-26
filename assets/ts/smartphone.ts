export interface Smartphone{
    carica:number;//euro disponibili per le chiamate
    numeroChiamate:number;//num chiamate effettuate

    ricarica(unaRicarica:number):void;//incrementare carica

    chiamata(minutiDurata:number):void;//aggiornare carica increm numero chiamate

    numero404():number;//restituisce carica disponibile

    getNumeroChiamate():number;//restituisce valore variabile numeroChiamate

    azzeraChiamate():void;//azzera variabile numeroChiamate
    

}