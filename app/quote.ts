import { IQuote } from './i-quote'

    /**
     * @description: Classe della Citazione
     * @class
     */
    export class Quote implements IQuote {
        
        /**
         * @description: testo della citazione
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
        constructor(text?: string)
        {
            this.text = text || '';
            this.votes = new Array<number>();
        }

        /**
         * @description: media dei voti somma(votes)/conta(votes)
         * @property
         */
        get rating(): number {
            
            let sum = this.votes.reduce((prev: number, next: number) => {
                return prev + next;
            });
            return sum / this.votes.length;
        }
    }
