// src/index.ts
function sumar(): void {
    let numero1 = document.getElementById('numero1') as HTMLInputElement;
    let numero2 = document.querySelector('input[name="valor2"]') as HTMLInputElement;
    let resultado = document.querySelector('input[name="resultado"]') as HTMLInputElement;

    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }

    resultado.value = (n1 + n2).toString();
}

function restar(): void {
    let numero1 = document.getElementById('numero1') as HTMLInputElement;
    let numero2 = document.querySelector('input[name="valor2"]') as HTMLInputElement;
    let resultado = document.querySelector('input[name="resultado"]') as HTMLInputElement;

    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }

    resultado.value = (n1 - n2).toString();
}

function multiplicar(): void {
    let numero1 = document.getElementById('numero1') as HTMLInputElement;
    let numero2 = document.querySelector('input[name="valor2"]') as HTMLInputElement;
    let resultado = document.querySelector('input[name="resultado"]') as HTMLInputElement;

    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.value = 'Error: Ingresa números válidos';
        return;
    }

    resultado.value = (n1 * n2).toString();
}

function dividir(): void {
    let numero1 = document.getElementById('numero1') as HTMLInputElement;
    let numero2 = document.querySelector('input[name="valor2"]') as HTMLInputElement;
    let resultado = document.querySelector('input[name="resultado"]') as HTMLInputElement;

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
