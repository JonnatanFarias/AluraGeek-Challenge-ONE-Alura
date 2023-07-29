import {novoProduto} from '../controllers/produtos-controller.js';

function detalhesProdutoEspecifico(produto) {
    const detalhesProduto = document.querySelector('.containerProduto');
    const prodSimilares = document.querySelector('.containerCategoria');

    detalhesProduto.innerHTML = `
    <img src="${produto.imageUrl}" alt="Imagem Produto">
    <div class="sobreProduto">
        <h1>${produto.name}</h1>
        <span>${produto.price}</span>
        <p>${produto.description}</p>
    </div>`;

    prodSimilares.innerHTML=`<section id="${produto.section}">
    <ul class="produtos"></ul>
    </section>
    `
}

function exibirProdutosSimilares(produtos, sectionId) {
    const sectionProdutosSimilares = document.getElementById(sectionId);
    const ulProdutosSimilares = sectionProdutosSimilares.querySelector('.produtos');

    produtos.forEach(produto => {
        if (produto.id !== selectedProductId) { 
            const novoCard = novoProduto(produto.name,produto.id,produto.imageUrl,produto.price);
            ulProdutosSimilares.appendChild(novoCard);
        }
    });
}


const urlParams = new URLSearchParams(window.location.search);
const selectedProductId = urlParams.get('id');

fetch("https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/db")
    .then(resposta => resposta.json())
    .then(produtos => {
        const produtoEspecifico = produtos.find(produto => produto.id === selectedProductId);

        if (produtoEspecifico) {
            detalhesProdutoEspecifico(produtoEspecifico);

            const produtosSimilares = produtos.filter(produto => produto.section === produtoEspecifico.section);
            exibirProdutosSimilares(produtosSimilares, produtoEspecifico.section);
        } else {
            console.log('Produto não encontrado');
        }
    })
    .catch(error => console.log(error));

 