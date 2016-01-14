import { Quote } from './quote'

    var q = new Quote('Hello Typescript!');
    
    q.votes = [5, 4, 3, 5, 5, 5, 4, 3];
    
    console.log(`"${q.text}" ha  voti ${q.votes.length} e una media pari a ${q.rating()}`);

