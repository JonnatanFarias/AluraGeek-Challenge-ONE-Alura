import { produtosServices } from '../services/produtos-services.js';

export const novoProduto = (name, id, imageUrl, price) => {
  const card = document.createElement("div");
  const conteudo = `
    <div class="produto">
      <img class="imgProduto" src="${imageUrl}">
      <h3 class="nomeProduto">${name}</h3>
      <span class="valorProduto">${price}</span>
      <a class="verProduto" href="produto.html?id=${id}">Ver produto</a>
    </div>`;

  card.innerHTML = conteudo;
  return card;
};

const preencherProdutos = (sectionId, produtos) => {
  const section = document.getElementById(sectionId);
  const ulProdutos = section.querySelector('.produtos');

  produtos.forEach(produto => {
      const { name, id,imageUrl, price, alt } = produto;
      const novoCard = novoProduto(name, id,imageUrl, price, alt);
      ulProdutos.appendChild(novoCard);
  });
};

produtosServices.listaProdutos()
  .then(produtos => {
      const produtosStarWars = produtos.filter(produto => produto.section === 'starWars');
      const produtosConsoles = produtos.filter(produto => produto.section === 'consoles');
      const produtosDiversos = produtos.filter(produto => produto.section === 'diversos');

      preencherProdutos('starWars', produtosStarWars);
      preencherProdutos('consoles', produtosConsoles);
      preencherProdutos('diversos', produtosDiversos);
  })
  .catch(error => console.log(error)); 
