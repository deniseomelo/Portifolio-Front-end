function IMC () {
    return (
        <div className="row">
            <div className="ccolumn">
                <div className="card">
                    <h2><strong>Análise de IMC</strong></h2>
                    <p> Informe o IMC: <input type = 'number' name = 'IMC' id = 'txti'></input></p>
                    <p><input type='button' value='analisar' onClick={analisar}></input></p>
                    <footer>© Healfh Life </footer>
                    <div id='res'></div>
                </div>
            </div>
        </div>
    )
}
function analisar() {

    let i = document.getElementById('txti')
    let inum = parseFloat(i.value)
    let res = document.getElementById('res')
    
    if (isNaN (inum) || inum <= 0.0) {
        window.alert('[erro] Favor preencher com valor superior a 0!')
        return;
    } 
    if (inum < 18.50){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Abaixo do Peso.` 
    }
    if (inum >= 18.50 && inum <= 24.49){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Peso Normal.` 
    }
    if (inum >= 25.0 && inum <= 29.9){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Sobrepeso.` 
    }
    if (inum >= 30.0 && inum <= 34.9){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Obesidade Grau I.` 
    }
    if (inum >= 35.0 && inum <= 39.9){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Obesidade Grau II` 
    }
    if (inum > 40.0){
        res.innerHTML= `O IMC apresentado foi ${inum}. Resultado: Obesidade Grau III` 
    }
}
export default IMC;