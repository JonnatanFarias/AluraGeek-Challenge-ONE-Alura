const btnLogin = document.querySelector('#btnLogin')


btnLogin.addEventListener('click',()=>{
    const txtLogin = document.querySelector('#txtEmail').value
    const txtSenha = document.querySelector('#txtPassword').value

    const email = 'admin'
    const senha = 'admin'

    if(txtLogin == '' && txtSenha == ''){
        alert('Todos os campos abaixo não podem serem nulos.')
    }else if(txtLogin == '' || txtSenha ==''){
        alert('Alguns campos estão em branco, por favor preencha-os corretamente.')
    }else if(txtLogin != email || txtSenha != senha){
        alert('Ops! Os dados informados estão incorretos por favor tente novamente.')
    }else{
        window.location.href = "produtos.html" 
    }

})
