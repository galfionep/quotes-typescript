import { Quote } from '../app/quote'

describe('Quote tests', () => {
    let q: Quote = new Quote('Hello Typescript!');
    q.votes = [5, 4, 3, 5, 5, 5, 4, 3];

    it("Testo = 'Hello Typescript!'", () => expect(q.text).toEqual('Hello Typescript!'));

    it("Primo voto = 5", () => expect(q.votes[0]).toEqual(5));

    it("Numero di voti = 8", () => expect(q.votes.length).toEqual(8));

    it("Voto medio = 4.25", () => expect(q.rating).toEqual(4.25));

});