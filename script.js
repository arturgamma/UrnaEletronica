let seuVotoPara = document.getElementById('seuVotoPara')
    //let cargo = document.querySelector('.d-1-2 span')
let descricao = document.getElementById('descricao')
let infoTela = document.getElementById('infoTela')
let latDireita = document.getElementById('latDireita')
let numeros = document.getElementById('numeros')

let etapaAtual = 0;
let digitado = ''
let VotoBranco = false

function iniciarEtapa() {
    let numeroHtml = ''
    digitado = ''
    VotoBranco = false
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
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === digitado) {
            return true
        } else {
            return false
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        infoTela.style.display = 'block'
        seuVotoPara.style.display = 'block'
        descricao.innerHTML = `Candidato: ${candidato.nome} </br> Partido: ${candidato.partido}`

        let fotosHtml = ''

        for (let i in candidato.fotos) {
            fotosHtml += `<div class="d-1-imagem"> <img src="${candidato.fotos[i].url}" alt=""></div>`
        }
        latDireita.innerHTML = fotosHtml
    } else {
        seuVotoPara.style.display = 'block'
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
    console.log("Candidato", candidato)
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
    if (digitado === '') {
        VotoBranco = true
        seuVotoPara.style.display = 'block'
        numeros.innerHTML = ''
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO BRANCO</div>'
    }
}

function corrige() {
    iniciarEtapa()
}

function confirma() {
    let etapa = etapas[etapaAtual]

    let votoConfirmado = false
    if (VotoBranco === true) {
        console.log("Confirmou")
        votoConfirmado = true
    } else if (digitado.length === etapa.numeros) {
        console.log("Confirmando como " + digitado)
        votoConfirmado = true
    }
    if (votoConfirmado) {
        etapaAtual++
        if (etapas[etapaAtual] !== undefined) {
            iniciarEtapa()
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">Fim</div>'
        }
    }
}

iniciarEtapa()