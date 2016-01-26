import { Quote } from "./quote";

/**
 * @description: Classe della Citazione
 * @class
 */
export class UnoQuote implements Quote {

    /**
     * Nome dell'autore della citazione
     * @property
     */
    author: string;

    /**
     * Testo della citazione
     * @property
     */
    text: string;

    /**
    * @description: array con i voti dei lettori: da 1 - pessima citazione a 5 - fantastica citazione 
    * @property
    */
    votes: Array<number>;

    /**
     * @description: costruttori
     * @constructor
     */
    constructor(author?: string, text?: string, votes?: Array<number>) {
        this.author = author || "";
        this.text = text || "";
        this.votes = votes || new Array<number>();
    }

    /**
     * @description: media dei voti somma(votes)/conta(votes)
     * @property
     */
    rating(): number {

        if (this.votes.length === 0 ) { return null; }

        let sum = this.votes.reduce((prev: number, next: number) => {
            return prev + next;
        });
        return sum / this.votes.length;
    }
}
