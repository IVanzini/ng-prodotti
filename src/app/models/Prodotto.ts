import { Rating } from "./Rating";

export interface Prodotto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}