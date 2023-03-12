let nomeUsuario = "Sandro Júnior";

let valorEmMoeda = 3000;
let cotacaoDoDolar = 5.12;
let cotacaoDoEuro = 5.58;
let cotacaoDoPesoArgentino = 0.027;

let valorEmReal = cotacaoDoPesoArgentino * valorEmMoeda;
valorEmReal = valorEmReal.toFixed(2);

let usuarioPossui = `${nomeUsuario}, a sua quantidade de moedas vale ${valorEmReal} R$`;

console.log(usuarioPossui);

let valorEmAnosLuz = 400;
let anosLuzEmKm = 9460800000000;
let anosLuzEmMetros = 94608000000000 * 100;
let valorEmMetros = valorEmAnosLuz * anosLuzEmMetros;
let valorEmKm = valorEmAnosLuz * anosLuzEmKm;
// valorEmReal = valorEmReal.toFixed(2);

// alert(
//   `Olá ${nomeUsuario}! ${valorEmAnosLuz} anos-luz correspondem a ${valorEmMetros} metros, o que corresponde a ${valorEmKm} Km.`
// );

console.log(valorEmMetros);
