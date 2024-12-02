const btnCadastrar = document.getElementById("cadastrar");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const emailCadastro = document.getElementById("email").value;
    const senhaCadastro = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_confirma").value;


    if (senhaCadastro === senhaConfirma) {
        
        alert("Cadastro realizado com sucesso!");

        // Salvar em localStorage o do email cadastrado
        localStorage.setItem("emailCadastrado", emailCadastro);
        localStorage.setItem("senhaCadastrada", senhaCadastro);


        window.location.href = "../login.html";
    } else {
        
        alert("Senhas não conferem!");

    }

});