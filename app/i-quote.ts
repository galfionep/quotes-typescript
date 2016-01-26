    /**
     * @description: Interfaccia della Citazione
     */
    export interface IQuote {
        // testo della citazione
        text: string;
        // array con i voti dei lettori: da 1 - pessima citazione a 5 - fantastica citazione 
        votes: Array<number>;
        // media dei voti somma(votes)/conta(votes)
        rating: number;
    }
