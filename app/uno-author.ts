import { Author } from "./author";
import { Quote } from "./quote";
import { QUOTES } from "./quotes";

/**
 * Classe Author .
 * Permette di definire gli autori delle citazioni con alcune informazioni aggiuntive
 * @interface
 */
export class UnoAuthor implements Author {
// collegamento all'elenco globale di citazioni 
private _allQuotes: Array<Quote>;

    constructor(name?: string)
    {
        this.name = name || "";
        // inizializzazione dell'elenco globale di citazioni
        this._allQuotes = QUOTES;
    }

    /**
     * Nome dell'autore per esteso
     * @property
     */
    name: string;
    /**
     * Data di nascita dell'autore
     * @property
     */
    dateBirth: Date;
    /**
     * Collegamento a Wikipedia o ad altre fonti sull'autore nel web
     * @property
     */
    url: string;
    /**
     * Collegamento all'immagine dell'autore
     * @property
     */
    image: string;
    /**
     * Elenco di citazioni dell'autore
     * @method
     */
    quotes(): Array<Quote> {
        let results = this._allQuotes.filter((item: Quote) => item.author === this.name);
        return results;
    }
} 