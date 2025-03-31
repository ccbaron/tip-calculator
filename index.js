// ¡Buena suerte!

const btnCalcular = document.querySelector("#calculate");
const inputBill = document.querySelector("#bill");
const inputTip = document.querySelector("#tip");
const spanTotal = document.querySelector("#total");

function calcularTotal() {
    const valorFactura = inputBill.value;
    const valorPropina = inputTip.value;
    const valorTotal = valorFactura * (1 + valorPropina / 100);
    spanTotal.innerText = valorTotal.toFixed(2);
    }
btnCalcular.addEventListener("click", calcularTotal);
