//função responsável por processar a pré-inscrição
function processarInscricao(){
    //Busca no HTML o VALOR digitado no input|campo "Nome"
const nome = document.querySelector('#nomeAluno').value;

//Busca no HTML a opção selecionada pelo usuário
const curso = document.querySelector('#curso').value 

//Busca no HTML a opção selecionada pelo usuário
const turno = document.querySelector('#turno').value

//Seleciona o elemento onde a mensagem final será exibida
const resultado = document.querySelector('#resultado'); 


//trim() = remove espaços em branco antes e depois do texto
//if verifica se algum campo esta vazio, então emite o alerta de campos vazios
if (nome.trim() === ' ' || curso === ' ' || turno === ' ') {

    //Exibe uma mensagem de erro para o usuário
    resultado.innerText = 'Por favor, preencha todos os campos para continuar!';

    //Interrompe a execução da função
    return;
}

//Caso todos os campos esteja preenchidos, cria uma mensagem personalizada
resultado.innerText = 
`Olá, ${nome}! Sua pré-inscrição no curso de ${curso}, no turno da ${turno}, foi realizada com sucesso.
Em breve, nossa equipe entrará em contato para dar continuidade no processo seletivo! `
}