// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(e){
    e.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
    console.log(e);
};

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then((response) => response.text())
     .then((data) => {
        resultadoCep.innerText = data;
     })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc');

function fetchBitCoin(){
    fetch('https://blockchain.info/ticker')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data.BRL.buy);
        btcDisplay.innerText = ('R$ ' + data.BRL.buy).replace('.', ',');
    })
};

// Atualiza o valor 
// setInterval(() => {
//     fetchBitCoin;
//     console.log('Funciona');
// }, 1000 * 30);

fetchBitCoin();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const mostraPiadas = document.querySelector('.piadas');
const btnProximaPiada = document.querySelector('.proximaPiada');

function contaPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        mostraPiadas.innerText = data.value;
    })
};

btnProximaPiada.addEventListener('click', contaPiada);

contaPiada();