var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", refresh2);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var genderButton = document.getElementById("male");
        var select = document.getElementById("select");
        var matrikel = inputs[2].value;
        var studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            studiengang: select.value,
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        console.log(studi.studiengang);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (var matrikel in L04_Interfaces.studiHomoAssoc) {
            var studi = L04_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.studiengang;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
    function refresh2(_event) {
        var output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var inputs = document.getElementsByTagName("input");
        var matrikel = inputs[6].value;
        console.log(matrikel);
        var studi = L04_Interfaces.studiHomoAssoc[matrikel];
        console.log(studi);
        if (typeof studi === "undefined") {
            output.value = "No student found.";
        }
        else {
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.studiengang;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
        console.group("Simple Array");
        console.log(L04_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L04_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map