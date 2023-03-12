let listaAnimes = [
  "https://2.bp.blogspot.com/-HCjrmkekUwY/U4kd5NqCt8I/AAAAAAAAEpo/Zg5j-Sg6Mvc/s1600/ngnl.jpg",
  "https://criticalhits.com.br/wp-content/uploads/2022/10/one-piece-1-1.jpg",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/eb8084f8230108f487402956e9984f1c.jpe",
  "https://i0.wp.com/asianbreak.com.br/wp-content/uploads/2022/01/Kuroko-no-Basket.jpg?fit=1200%2C675&ssl=1",
];

document.write("<h1>" + "Animes" + "</h1>");

for (let i = 0; i < listaAnimes.length; i++) {
  document.write("<img src=" + listaAnimes[i] + ">");
}

console.log(listaAnimes[0]);
