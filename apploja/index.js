function cadastrar() {

    var select = document.getElementById('options')
    var produto = select.options[select.selectedIndex].text;
    var valor = select.options[select.selectedIndex].value;
    var valornum = parseFloat(valor)
    var qua = document.getElementById('txtq')
    var quanum = parseInt(qua.value)
    var total = valornum * quanum;
    var res = document.getElementById('res')

    if (isNaN(valornum) || valornum === 0.0 || isNaN(quanum) || quanum === 0.0) {
        window.alert('[erro] Faltam dados a serem preenchidos!')
        return;
    }

    total = valornum * quanum;

    res.innerHTML = ` O produto selecionado foi ${produto}, no valor de R$:  ${valornum.toFixed(2)}. Valor total da compra é de R$: ${total.toFixed(2)} \u{1F917} `
}