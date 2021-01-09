let seuVotoPara = document.getElementById('seuVotoPara')
    //let cargo = document.querySelector('.d-1-2 span')
let descricao = document.getElementById('descricao')
let infoTela = document.getElementById('infoTela')
let latDireita = document.getElementById('latDireita')
let numeros = document.getElementById('numeros')

let etapaAtual = 0;
let digitado = ''

function iniciarEtapa() {
    let numeroHtml = ''
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero"></div>'
        }

    }
    let etapa = etapas[etapaAtual]
    seuVotoPara.style.display = 'none'
    descricao.innerHTML = ''
    infoTela.innerHTML = ''
    latDireita.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function atualizaInterface() {
    alert('Finalizou o voto')

}

function clicou(n) {
    let lnum = document.querySelector('.numero.pisca')
    if (lnum != null) {
        lnum.innerHTML = n
        digitado = `${digitado}${n}`

        lnum.classList.remove('pisca')
        if (lnum.nextElementSibling != null) {
            lnum.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
    }
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