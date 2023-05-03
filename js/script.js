let placarUsuario = document.querySelector("#placarUsuario");
let placarComputador = document.querySelector("#placarComputador");
const recomecar = document.querySelector("#recomecar");
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");

let pontosUsuario = 0, pontosComputador = 0, jogadaComputador;

function computadorJogada () {
    const escolhas = ["pedra", "papel", "tesoura"];
    let escolhaRandom = Math.floor(Math.random() * 3);

    return jogadaComputador = escolhas[escolhaRandom];
}
function mudarPlacar () {
    placarUsuario.innerHTML = `Você ${pontosUsuario}`;
    placarComputador.innerHTML = `Computador ${pontosComputador}`;
}
function jogo (usuarioJogada) {
    let mensagemResultado = document.querySelector("#resultado");

    computadorJogada()
    //* Empate
    if (jogadaComputador == usuarioJogada) {
        mensagemResultado.innerHTML = "<h1> Empate! <h1> <p> Você e o computador fizeram a mesma jogada."
    }
    //* Pedra
    else if (jogadaComputador == "tesoura" && usuarioJogada == "pedra"){
        mensagemResultado.innerHTML = "<h1> Você ganhou! </h1> <p> O computador escolheu tesoura, a pedra amassa a tesoura.";
        pontosUsuario++;
    }
    else if (jogadaComputador == "papel" && usuarioJogada == "pedra"){
        mensagemResultado.innerHTML = "<h1> Você perdeu! </h1> <p> O computador escolheu papel, o papel embrulha a pedra";
        pontosComputador++;
    }
    //* Papel
    else if (jogadaComputador == "pedra" && usuarioJogada == "papel"){
        mensagemResultado.innerHTML = "<h1> Você ganhou! </h1> <p> O computador escolheu pedra, o papel embrulha a pedra.";
        pontosUsuario++;
    }
    else if (jogadaComputador == "tesoura" && usuarioJogada == "papel"){
        mensagemResultado.innerHTML = "<h1> Você perdeu! </h1> <p> O computador escolheu tesoura, a tesoura corta o papel.";
        pontosComputador++;
    }
    //* Tesoura
    else if (jogadaComputador == "papel" && usuarioJogada == "tesoura"){
        mensagemResultado.innerHTML = "<h1> Você venceu! </h1> <p> O computador escolheu pedra, a tesoura corta o papel";
        pontosUsuario++;
    }
    else if (jogadaComputador == "pedra" && usuarioJogada == "tesoura"){
        mensagemResultado.innerHTML = "<h1> Você perdeu! </h1> <p> O computador escolheu pedra, a pedra amassa a tesoura";
        pontosComputador++;
    }

    mensagemResultado.classList.add("resultado");
    mensagemResultado.classList.remove("hide");
    recomecar.classList.remove("hide");

    mudarPlacar();
}

papel.addEventListener("click", () => {
    jogo("papel");
});

pedra.addEventListener("click", () => {
    jogo("pedra");
});

tesoura.addEventListener("click", () => {
    jogo("tesoura");
});

recomecar.addEventListener ("click", ()=> {
    location.reload();
})