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


//Alternativa//

/*
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");

const btnCalculate = document.querySelector("#calculate");
const total = document.querySelector("#total");

btnCalculate.addEventListener("click",
    function () {
        const billValue = parseFloat(bill.value);
        const tipValue = parseFloat(tip.value);
        const totalValue = billValue * (1 + tipValue / 100);
        total.innerText = totalValue.toFixed(2);
    });

 */