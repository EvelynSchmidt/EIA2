namespace Memory04 {

    export interface Deck {
        content: string[];
        cssClass: string;


    }
    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks3: Decks = {}

    export interface Decks {
        [deckname: string]: Deck;
    }
    export let decks: Decks = {};
    decks["Fruits"] = {
        content: ["Erdbeere", "Himbeere", "Mango", "Granatapfel", "Maracuja", "Birne", "Banane", "Kiwi", "Zitrone", "Johannisbeere"],
        cssClass: "Fruits",
    }
    decks["Citys"] = {
        content: ["Amsterdam", "Berlin", "Brüssel", "Peking", "Helsinki", "Athen", "Dublin", "Bagdad", "Nairobi", "Havanna", "Wien", "Washington", "Kapstadt", "Warschau", "Lisabon", "Madrid", "Venedig", "Rom", "Prag", "Kiew", "Maiami", "Los Angeles", "New York", "London", "Coppenhagen", "Hamburg", "Kairo", , "Moskau", "Oslo", "Paris", "Rio", "Tokio"],
        cssClass: "Citys",
    }
    decks["Planets"] = {
        content: ["Erde", "Venus", "Mars", "Pluto", "Saturn", "Uranus", "Merkur", "Jupiter", "Neptun"],
        cssClass: "Planets",
    }
    export interface Player {
        name: string;
        points: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {}
}

