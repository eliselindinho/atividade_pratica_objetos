/*Crie um arquivo chamado objetos_js.html, e vamos fazer um algoritmo:

a. Utilize a sua criatividade e crie um objeto em JS que faça a representação (abstração) de um Apartamento. Pense em representar todas as propriedades que este objeto tem, e como você pode organizar essa informação.

b. Exiba este objeto inteiro no console do navegador.

c. Exiba apenas uma propriedade (qualquer uma que compõe o objeto) no console do navegador.*/

let apartamento = {
  quartos: 3,
  banheiros: 3,
  lavabo: 1,
  cozinha: 1,
  sacada: 3,
  garagem: 2,
  sala: {
    jantar: 1,
    tv: 1,
  },
};
console.log(
  "O apartamento está distribuído da seguinte maneira: ",
  apartamento
);
console.log("O apartamento tem: ", apartamento.quartos);
