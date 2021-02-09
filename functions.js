
//Get Inputs
var radBoxEl = document.getElementById("rOutput");
var diaBoxEl = document.getElementById("dOutput");
var cirBoxEl = document.getElementById("cOutput");
var SABoxEl = document.getElementById("SAOutput");
var boxEl = document.getElementById("Number");
var btnEl = document.getElementById("calculateButton");

function Output (R, D, C, SA) {
    radBoxEl.innerHTML = "Radius: " + R;
    diaBoxEl.innerHTML = "Diameter: " + D; 
    cirBoxEl.innerHTML = "Circumference: " + C;
    SABoxEl.innerHTML = "Surface Area: " + SA;
}

function calculate() {
    var typeEl = document.getElementById("type").value;
    //Process

    if (typeEl === "dInput") {
        var d = +boxEl.value;
        let radius = d / 2;
        let diameter = d;
        let circumference = Math.PI * d;
        let surfaceArea = Math.pow(d / 2,2) * Math.PI;
        Output(radius, diameter, circumference, surfaceArea);
    } else if (typeEl === "rInput") {
        var r = +boxEl.value;
        var radius = r;
        var diameter = r * 2;
        var circumference = Math.PI * r * 2;
        var surfaceArea = Math.pow(r,2) * Math.PI;
        Output(radius, diameter, circumference, surfaceArea);
    } else if (typeEl === "cInput") {
        var c = +boxEl.value;
        var radius = c / (Math.PI * 2);
        var diameter = c / Math.PI;
        var circumference = c;
        var surfaceArea = Math.PI * (Math.pow((c / (Math.PI * 2)), 2));
        Output(radius, diameter, circumference, surfaceArea);
    } else if (typeEl === "SAInput") {
        var sa = +boxEl.value;
        var radius = Math.sqrt(sa / Math.PI);
        var diameter = 2 * Math.sqrt(sa / Math.PI);
        var circumference = 2 * Math.sqrt(Math.PI * sa);
        var surfaceArea = sa;
        Output(radius, diameter, circumference, surfaceArea);
    }
}

btnEl.addEventListener("click", calculate);