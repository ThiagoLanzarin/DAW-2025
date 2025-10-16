const inicio = () => {
    console.log('Início 1');

}

const fim = () => {
    console.log('Fim 1');
}

const processa = (ini, final) => {
    ini();
    final();
}

processa(inicio, fim);

processa(() => {
    console.log('Início 2');
}, () => {
    console.log('Fim 2');
});