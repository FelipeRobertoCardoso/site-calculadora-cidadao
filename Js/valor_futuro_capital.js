
function calcularJuroCompostos(capital, taxa, meses){
    
    return capital * (1 + (taxa/100)) ** meses
    
}

let resposta = document.getElementById('resposta')

function principal(){

    let capital = Number(document.getElementById('capital').value)
    let taxa = Number(document.getElementById('taxa').value)
    let meses = Number(document.getElementById('meses').value)

    let valorTotal = calcularJuroCompostos(capital, taxa, meses)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor total do montante é de: R$${valorTotal.toFixed(2)}`



}