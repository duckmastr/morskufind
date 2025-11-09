const searchBar = document.getElementById('searchBar');
const resultDisplay = document.getElementById('resultDisplay');

const morData = {
    1: "#1, SKU 31643 EXTRUSION U CHANNEL 18 X 4MM",
    31643: "#1, SKU 31643 EXTRUSION U CHANNEL 18 X 4MM",
    2:"#2, SKU 31646 EXTRUSION U CHANNEL 23 X 4.4MM ",
    31646:"#2, SKU 31646 EXTRUSION U CHANNEL 23 X 4.4MM ",
    3:"#3 SKU 31661 EXTRUSION U CHANNEL 5X5MM FITS OVER UP TO 2.25MM",
    31661:"#3 SKU 31661 EXTRUSION U CHANNEL 5X5MM FITS OVER UP TO 2.25MM",
    4:"#4 SKU 31679 WEATHER STRIP 2.5/7T NO10 U SHAPE",
    31679:"#4 SKU 31679 WEATHER STRIP 2.5/7T NO10 U SHAPE",
    5:"#5 SKU 31654 EXTRUSION U CHANNEL 8 X 6MM",
    31654:"#5 SKU 31654 EXTRUSION U CHANNEL 8 X 6MM",
};

function lookup() {
    const input = document.getElementById("searchBar").value;
    const resultDiv = document.getElementById("resultDisplay");

    if (input in morData) {
        resultDiv.innerText = morData[input];
    } else {
        resultDiv.innerText = "No results found.";
    }
}