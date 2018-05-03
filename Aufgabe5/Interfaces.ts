namespace L04_Interfaces {
    // Struktur des Arrays als Datensatz für ein Studenten
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        major: string;
    }

    // Struktur des Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
         [matrikel: string]: Studi;
    }

    //  Array zum Speichern der Studi-Datensätze
    export let studiSimpleArray: Studi[] = [];
    
    // Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
    }
