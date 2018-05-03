namespace L04_Interfaces {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        console.log(inputs);
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            major: inputs[4].value
        };

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.major + ",";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
    }

    function search(_event: Event): void {
        document.getElementById("searchresult").innerHTML = "";
        var matrikel: number = parseInt((<HTMLInputElement>document.getElementById("matrikelsearch")).value);
        if (studiHomoAssoc[matrikel] == undefined) {
            document.getElementById("searchresult").innerHTML = "Not found!";
        } else {
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.major + ",";
            line += studi.gender ? "(M)" : "(F)";
            document.getElementById("searchresult").innerHTML += line + "\n";
        }
    }
}