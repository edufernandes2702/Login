document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    const emailRecupera = document.getElementById("email").value;
    const emailCadastro = localStorage.getItem("emailCadastrado");
    const senhaRecupera = document.getElementById("password").value;
    const confirmaSenha = document.getElementById("password_confirma").value;

    if (emailCadastro === emailRecupera) {
        
        if (senhaRecupera === confirmaSenha) {
            
            localStorage.setItem("senhaCadastrada", senhaRecupera)
            alert("Nova senha cadastrada com sucesso!!")

        } else {

            alert("Senhas não são iguais!!")
            
        }

        

    } else {
        
        alert("E-mail invalido!!!")

    }
});