

function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado = (num1 + num2);
    document.getElementById('resultado').innerHTML = resultado;
}

function restar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado = (num1 - num2);
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado = (num1 * num2);
    document.getElementById('resultado').innerHTML = resultado;
}

function dividir() {
    var num2 = parseInt(document.getElementById("num2").value);
if(num2 == 0){
    alert("No es posible divdir por 0");
}else{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado = (num1 / num2);
    document.getElementById('resultado').innerHTML = resultado;
}
    
}

function modulo() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let resultado = (num1 % num2);
    document.getElementById('resultado').innerHTML = resultado;
}