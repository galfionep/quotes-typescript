import { Quote } from './quote'
import { UnoQuote } from './uno-quote'

    var q : Quote = new UnoQuote('Hello Typescript!');
    
    q.votes = [5, 4, 3, 5, 5, 5, 4, 3];
    
    console.log(`"${q.text}" ha  voti ${q.votes.length} e una media pari a ${q.rating}`);

