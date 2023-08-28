function verificaStrings() {
    let primeiraString = document.querySelector('#primeiraString').value;
    let segundaString = document.querySelector('#segundaString').value;

    let mensagem = document.querySelector('h2');
    mensagem.style.color = '#3b3737';

    if(primeiraString == '' || segundaString == '') {
        console.log('As strings não podem ser vazias');
        
        mensagem.innerText = 'As strings não podem ser vazias';
    } else if(primeiraString == segundaString) {
        console.log('As strings são iguais');
        
        mensagem.innerText = 'As strings são iguais';
    } else {
        console.log('As strings NÃO são iguais');

        mensagem.innerText = 'As strings NÃO são iguais';
        mensagem.style.color = '#991818';
        mensagem.style.fontWeight = 'bold';
    }
}