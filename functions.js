
//Get Inputs
var cirBoxEl = document.getElementById("cOutput");
var btnEl = document.getElementById("calculateButton");
var diaInputEl = document.getElementById("dInput");

function formulaFunction(d) {
    //Process
    let out = Math.PI * d;
    return out;
}

function calculate() {
    // Get inputs
    let D = +diaInputEl.value;
    
    // Calculate & Output
    cirBoxEl.innerHTML = "Circumference: " + formulaFunction(D);
   }
   
btnEl.addEventListener("click", calculate);