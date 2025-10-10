"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
function sumar() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.querySelector('input[name="valor2"]');
    let resultado = document.querySelector('input[name="resultado"]');
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }
    resultado.value = (n1 + n2).toString();
}
function restar() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.querySelector('input[name="valor2"]');
    let resultado = document.querySelector('input[name="resultado"]');
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }
    resultado.value = (n1 - n2).toString();
}
function multiplicar() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.querySelector('input[name="valor2"]');
    let resultado = document.querySelector('input[name="resultado"]');
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }
    resultado.value = (n1 * n2).toString();
}
function dividir() {
    let numero1 = document.getElementById('numero1');
    let numero2 = document.querySelector('input[name="valor2"]');
    let resultado = document.querySelector('input[name="resultado"]');
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }
    if (n2 === 0) {
        resultado.value = 'Error: División por cero';
        return;
    }
    resultado.value = (n1 / n2).toString();
}
//# sourceMappingURL=index.js.map