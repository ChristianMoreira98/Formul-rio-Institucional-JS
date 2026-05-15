function realizarLogin(){
    const email = document.querySelector('#email').value;
    //recuperando o id "email" e o value que será digitado nele

    const senha = document.querySelector('#senha').value;

    const mensagem = document.querySelector('#mensagem');

    const aresRestrita = document.querySelector('#area-restrita');

    //credenciais simuladas para validação

    const emailValido = 'alunocalouro@falculdade.com';
    const senhaValida = 'aluno123';

    if (email.trim() === ' '  || senha.trim() === ' '){

        mensagem.innerText = "Por favor, preencha todos os campos";
        mensagem.style.color = 'red';

return;

    }


    if(email === emailValido && senha === senhaValida) {

        //Exibe a mensagem de sucesso
mensagem.innerText = 'Login realizado com sucesso!';
mensagem.style.color = 'green';

areaRestrita.style.display = 'block';

    }
    else{
        mensagem.innerText = 'Email ou senha invalidos. Tente novamente.'
        mensagem.style.color = 'red';
    }

}