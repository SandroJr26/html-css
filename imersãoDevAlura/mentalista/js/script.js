let nmrSecreto = 26;

while (chute != nmrSecreto) {
  var chute = prompt("Digite um número entre 0 e 1000");

  if (nmrSecreto == chute) {
    console.log("HAHAHA Você acertou!!!");
  } else if (chute > nmrSecreto) {
    console.log("HAHA Você foi nas alturas!!!");
  } else if (chute < nmrSecreto) {
    console.log("HAHA Está rastejando pelo chão agora!!!");
  }
}
