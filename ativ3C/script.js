const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "ja joguei elden ring.",
            },
            {
                texto: "nunca joguei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já joguei outros souls likes.",
            },
            {
                texto: "Nunca joguei sousls likes.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "gosto de souls like.",
            },
            {
                texto: "não tenho interesse em souls like.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "pretendo jogar mais sous likes.",
            },
            {
                texto: "nao tenho nenhuma vontade de jogar soulslike.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "pretendo jogar outros estilos de jogos.",
            },
            {
                texto: "não pretendo jogar outros tipos por agora.",
            }
        ]
    },
    
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();