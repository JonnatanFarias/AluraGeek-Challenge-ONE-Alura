import {produtosServices} from "../services/produtos-services.js";

function criaEstrutura() {
    const mainProduto = document.querySelector(".containerCategoria");

    mainProduto.innerHTML = `<ul class="lista-todos-produtos"></ul>`;
    carregarTodosProdutos();
}

function controiCard(imageUrl, name, price, id, alt) {
    const produto = document.createElement("li");
    produto.setAttribute("data-id", id)

    produto.innerHTML = `
    <div class="produto">
    <img class="imgProduto" src="${imageUrl}" alt="${alt}">
    <h3 class="nomeProduto">${name}</h3>
    <span class="valorProduto">${price}</span>
    <span>ID = ${id}</span>
    <a class="botao-editar bi-pencil" > Editar</a>
    <button class="botao-remover bi-trash"> Deletar</button>
    </div>               
    `;

    return produto;
}

function carregarTodosProdutos() {
    const listaProdutos = document.querySelector(".lista-todos-produtos");

    produtosServices.listaProdutos()
        .then(produtos => {
            produtos.forEach(produto => {
                const cardProduto = controiCard(produto.imageUrl, produto.name, produto.price, produto.id, produto.alt);
                listaProdutos.appendChild(cardProduto);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
}

criaEstrutura();