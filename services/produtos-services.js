// GET
const listaProdutos = () => {
    return fetch("https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/db") // Retorne a promise aqui
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            return resposta.json(); // Retorne a resposta em formato JSON
        })
        .catch(error => {
            console.log(error);
            throw error; // Rejete a promise com o erro para que ele possa ser tratado posteriormente
        });
};

const getProdutoPorId = (id) => {
    return fetch(`https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/${id}`)
      .then(resposta => resposta.json())
      .catch(error => console.log(error));
  }

// POST
const criaProdutos = (imageUrl,section,name,price,description) => {
    return fetch("https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/db", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imageUrl,
            section,
            name,
            price,
            description
        })
    }).then(resposta => {
        if (resposta.ok) {
            return resposta.json(); // Retorne a resposta em formato JSON
        } else {
            throw new Error("Não foi possível criar o produto");
        }
    });
};



export const produtosServices = {
    listaProdutos,
    getProdutoPorId,
    criaProdutos
};
