let seuVotoPara = document.getElementById('seuVotoPara')
    //let cargo = document.querySelector('.d-1-2 span')
let descricao = document.getElementById('descricao')
let infoTela = document.getElementById('infoTela')
let latDireita = document.getElementById('latDireita')
let numeros = document.getElementById('numeros')

let etapaAtual = 0;

function iniciarEtapa() {
    let numeroHtml = ''
    for (let i = 0; i < etapas.numeros; i++) {
        numeroHtml += '<div class="numero"></div>'
    }
    let etapa = etapas[etapaAtual]
    seuVotoPara.style.display = 'none'
    descricao.innerHTML = ''
    infoTela.innerHTML = ''
    latDireita.innerHTML = ''
    numeros.innerHTML = numeroHtml



}

function clicou(n) {
    alert("Clicou em " + n)
}

function branco() {
    alert("Clicou em branco!")
}

function corrige() {
    alert("Clicou em corrige!")
}

function confirma() {
    alert("Clicou em confirma!")
}

iniciarEtapa()