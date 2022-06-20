// function rgbToHex() {
//     let inputVal = document.getElementById("rgbColor").value;
//     var values = /(\d{1,3})\D+(\d{1,3})\D+(\d{1,3})/g.exec(inputVal).splice(1, 3);

//     if (values.length !== 3) return false;

//     var hexValue = "#";
//     for (const value of values) {
//         hexValue += parseInt(value).toString(16);
//     }

//     document.getElementById("hexColor").value = hexValue;
//     document.body.style.backgroundColor = `${hexValue}`;
// }
// function calculateInterest() {
//     let total = document.getElementById("total").value;
//     let ratePercent = document.getElementById("rate").value;
//     let years = document.getElementById("years").value;
//     var interestRate = ratePercent / 100 + 1;
//     return (total * Math.pow(interestRate, years)).toFixed();

// }
// document.getElementById("results").innerHTML = calculateInterest();

// var principal = 0;
// var interestRate = 0;
// var timesCompounded = 0;
// var termOfLoan = 0;
// var amount = 0;
window.onload = () => {
    let button = document.querySelector("#btn");
    // button.addEventListener("click", myFunction);
    button.addEventListener("click", function(event) {
        event.preventDefault(); // prevents form from submitting
    });
};

function Calculate() {
    let p = document.getElementById("total").value;
    let t = document.getElementById("years").value;
    let r = document.getElementById("rate").value;

    let sI = Math.floor((p * t * r) / 100);

    document.getElementById("results").value =
        `your total interestAmount = ${sI}`;
}