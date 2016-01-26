import { Quote } from "./quote";

/**
 * Interfaccia Author.
 * Permette di definire gli autori delle citazioni con alcune informazioni aggiuntive
 * @interface
 */
export interface Author {
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
    quotes(): Array<Quote>;
} 