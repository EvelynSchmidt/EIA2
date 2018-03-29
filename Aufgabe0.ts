function Feld(): void {
  var eingabe: string = prompt("Wie heißt du?", "");
  if (eingabe != null) {
    document.getElementById("HTML").innerHTML =
      "Hallo, " + eingabe + "!";
  }
}


