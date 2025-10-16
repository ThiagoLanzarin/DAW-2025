//função sem retorno
function inicio() {
    const mensagem = 'Olá, mundo!';
    console.log(mensagem);
}

//função com retorno
function processar() {
    const mensagem = 'Processando...';
    return mensagem;
}

inicio(); // Chama a função que não retorna nada
const processa = processar(); // Chama a função que retorna uma mensagem, mas não faz nada com ela
console.log(processa); // Exibe a mensagem retornada pela função processar