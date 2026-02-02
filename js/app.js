let alugados = 0;

function alterarStatus(id) {
    let Gameclicado = document.getElementById(`game-${id}`);
    let imagem = Gameclicado.querySelector(".dashboard__item__img");
    let botao = Gameclicado.querySelector(".dashboard__item__button");
    let nome = Gameclicado.querySelector(".dashboard__item__name");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        prompt(`Confirme sua devolução para o jogo: ${nome.textContent}`);
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        alugados++;
    }
    console.log(`Jogos alugados: ${alugados}`);
}