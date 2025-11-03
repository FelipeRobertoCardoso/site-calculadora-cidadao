
function calcularFinanciamento(taxa, meses, capital){
    
    return (((1 - (1 + (taxa/100)) ** - meses)) / (taxa/100)) * capital
    
}

let resposta = document.getElementById('resposta')

function principal(){

    let capital = Number(document.getElementById('capital').value)
    let taxa = Number(document.getElementById('taxa').value)
    let meses = Number(document.getElementById('meses').value)

    let valorTotal = calcularFinanciamento(taxa, meses, capital)
    let valorFinal = meses * capital
    let jurosTotal = valorFinal - valorTotal

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor total é de: R$${valorTotal.toFixed(2)} <br>`
    resposta.innerHTML += `O valor do financiamento é de R$${valorFinal.toFixed(2)} <br>`
    resposta.innerHTML += `O valor de juros é de R$${jurosTotal.toFixed(2)}`


}