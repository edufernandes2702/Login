// ==================== SHOW HIDDEN - PASSWORD ==========================
const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");

    iconEye.addEventListener('click', () => {
        
        // change passwork to text

        if(input.type === 'password'){
            //  Switch to text

            input.type = 'text';

            // icon change
            iconEye.classList.remove('ri-eye-off-line');
            iconEye.classList.add('ri-eye-line');
        } else {
            // change text to password
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};

showHiddenPassword();

let tentativas = 0;



document.querySelector("form").addEventListener("submit", (e) => {
    
    e.preventDefault();

    const emailLogin = document.getElementById("email").value;
    const senhaLogin = document.getElementById("password").value;

    // Recuperar dados do local storage 
    
    const email_cadastro = localStorage.getItem("emailCadastrado");
    const senha_cadastro = localStorage.getItem("senhaCadastrada");

    if ( (emailLogin === email_cadastro) && (senhaLogin === senha_cadastro) ) {

        alert("Login realizado com sucesso!!");
        
    } else {

        if(emailLogin !== email_cadastro) {
            alert("Email não cadastrado!!")
        };

        if (senhaLogin !== senha_cadastro) {
            alert("Senha incorreta!!")

            tentativas +=  1;

            alert (`tentativa ${tentativas}/3`);

            if(tentativas === 3){
                alert("Senha bloqueada por excesso de tentativas!!")

                window.location = "./pages/recupera.html"
            }

        };


        

    }
    

});

