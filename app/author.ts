import { Quote } from './quote'

export interface Author {
    name: string;
    dateBirth: Date;
    link: string;
    quotes: Array<Quote>;
    quotesSortBy: Array<Quote>;
} 