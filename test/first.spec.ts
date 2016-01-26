import { Quote } from '../app/quote'
import { UnoQuote } from '../app/uno-quote'
import { Author } from '../app/author'
import { UnoAuthor } from '../app/uno-author'

describe('Quote tests', () => {
    let q: Quote = new UnoQuote('Hello Typescript!');
    q.votes = [5, 4, 3, 5, 5, 5, 4, 3];

    it("Testo = 'Hello Typescript!'", () => expect(q.text).toEqual('Hello Typescript!'));

    it("Primo voto = 5", () => expect(q.votes[0]).toEqual(5));

    it("Numero di voti = 8", () => expect(q.votes.length).toEqual(8));

    it("Voto medio = 4.25", () => expect(q.rating).toEqual(4.25));

});

describe('Quote tests', () => {
    let author: Author = {
        id: 1,
        name: "Murphy",
        dateBirth: new Date(1918, 1, 11);
        link: "https://it.wikipedia.org/wiki/Legge_di_Murphy",
        quotes
        
        
        
        
        
        
    } 

    it("Testo = 'Hello Typescript!'", () => expect(q.text).toEqual('Hello Typescript!'));

    it("Primo voto = 5", () => expect(q.votes[0]).toEqual(5));

    it("Numero di voti = 8", () => expect(q.votes.length).toEqual(8));

    it("Voto medio = 4.25", () => expect(q.rating).toEqual(4.25));

});