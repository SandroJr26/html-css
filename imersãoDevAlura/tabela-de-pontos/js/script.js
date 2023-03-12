let rafa = {
  nome: "Rafa",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let paulo = {
  nome: "Paulo",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let gui = {
  nome: "Gui",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let diego = {
  nome: "Diego",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

let elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = ` <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
      </tr>`;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos += 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
