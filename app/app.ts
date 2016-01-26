import { Quote } from "./quote";
import { UnoQuote } from "./uno-quote";
import { Author } from "./author";
import { UnoAuthor } from "./uno-author";

    let quote: Quote = new UnoQuote("Paolo", "Hello Typescript!");
    quote.votes = [5, 4, 3, 5, 5, 5, 4, 3];
    console.log(`"${quote.text}" ha  voti ${quote.votes.length} e una media pari a ${quote.rating()}`);

    let a: Author = new UnoAuthor("Murphy");
    console.log(a.quotes());

