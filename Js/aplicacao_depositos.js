
function calcularAplicacaoDeposito(taxa, meses, capital){
    
    return (1 + (taxa/100)) * ((1 + (taxa/100)) ** meses - 1) / (taxa/100) * capital
    
}

let resposta = document.getElementById('resposta')

function principal(){

    let capital = Number(document.getElementById('capital').value)
    let taxa = Number(document.getElementById('taxa').value)
    let meses = Number(document.getElementById('meses').value)

    let valorTotal = calcularAplicacaoDeposito(taxa, meses, capital)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor total é de: R$${valorTotal.toFixed(2)}`



}