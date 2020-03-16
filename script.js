function button() {
    const pi = 3.14;

    var input = document.getElementById("inputBtn").value;

    document.getElementById("diamtr").innerText = "De omtrek van een circel is " + pi * input;
}