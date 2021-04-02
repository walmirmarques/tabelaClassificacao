let rafa = {
    nome : "Rafaela",
    vitorias : 5,
    empates : 1,
    derrotas : 2,
    pontos: 0
}

let paulo = {
    nome : "Paulo",
    vitorias : 7,
    empates : 2,
    derrotas : 3,
    pontos: 0,
}

function calculaPontos(jogador){
    pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

paulo.pontos = calculaPontos(paulo);
rafa.pontos = calculaPontos(rafa);

let jogadores = [rafa, paulo];

function exibirJogadoresNaTela(jogadores){
    var html = "";
    for (let i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td> <button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td> <button onClick='adicionarEmpate(" + i + ")'>Empates</button></td>"
        html += "<td> <button onClick='adicionarDerrota(" + i + ")'>Derrotas</button></td></tr>"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias ++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates ++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas ++
    exibirJogadoresNaTela(jogadores)
}