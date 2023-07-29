import { produtosServices } from "../services/produtos-services.js"

const btn = document.querySelector('#btnAddProd')

btn.addEventListener("click",(evento)=>{
    
    const url = document.querySelector('#urlImagem').value
    const nomeProdut = document.querySelector('#txtNomeProd').value
    const categoria = document.querySelector('#txtCategoria').value
    const preco = document.querySelector('#precoProd').value
    const descricao = document.querySelector('#descricaoProd').value
    

    produtosServices.criaProdutos(url,categoria,nomeProdut,preco,descricao)
    .then(resposta=>{
        window.location.href = "index.html"
        console.log(resposta)
    }).catch(error=>{
        console.log(error)
    })

})
