// Fetch API 
// Permite fazermos requisições HTTP através do método 'fetch()'.
// Este método retorna a resolução de uma 'Promise'.
// Podemos então utilizar o '.then()' para interagirmos com a resposta, que é um objeto do tipo 'Response'.

fetch('./doc.txt').then((function(response){
    console.log(response); // Response HTTP (Objeto)
}));


// Response
// O objeto 'Response', possui um corpo com o conteúdo da resposta.
// Esse corpo pode ser transformado utilizando métodos do protótipo do objeto 'Response'. 
// Estes retornam outras 'Promises'.


fetch('./doc.txt').then((response) => {
    return response.text();
}).then((corpo) => {
    console.log(corpo);
});



// Servidor Local
// O fetch faz uma requisição HTTP/HTTPS.
// Se você iniciar um site local diretamente pelo 'index.html', ser um servidor local, o fetch não irá funcionar.

fetch('c:/files/arquivo.txt')
.then((response) => {
    return response.text();
})
.then((corpo) => {
    console.log(corpo);
}); // erro

/*
    Se dermos um espaçoi após o objeto ou pularmos linha,
    o meétodo cotinua funcionando.
*/



// .json()
// Um tipo de formato de dados muito utilizado com JavaScript é o 'JSON' (JavaScript Object Notation),
// pelo fator dele possuir basicamente a mesma sintaxe que a de um objeto js. '.json()' transforma um corpo em json em um objeto 'JavaScript'.

fetch('https://viacep.com.br/ws/0100100/json')
.then(response => response.json())
.then(cep => {
    console.log(cep.bairro, cep.logradouro);
});



// .text()
// Podemos utilizar o .text() para diferentes formatos como txt, joson, html, css, js e mais.

const styleElement = document.createElement('style');

fetch('.style.css')
.then((response) => {
    response.text();
})
.then((style) => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
});



// HTML e .text()
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com innerHTML.
// A partir dai podemos manipular esses dados como um DOM qualquer.

const div = document.createElement('div');

fetch('./sobre.html')
.then((response) => {
    response.text();
})
.then((htmlBody) => {
    div.innerHTML = htmlBody;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
});



// .blob();
// Um 'blob' é um tipo de objeto utilizado para representação de dados de um arquivo.
// O 'blob' pode ser utilizado para transformarmos requisições de imagens por exemplo.
// O 'blob' gera um URL único.


// const div = document.querySelector('div');
fetch('./imagem.png')
.then(response => {
    response.blob()
})
.then((imgBlob) => {
    const blobUrl = URL.createObjectURL(imgBlob);
    console.log(blobUrl);
});



// .clone()
// Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada.
// Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.


// const div = document.querySelector('div');
fetch('https://viacep.com.br/ws/01001000/json/')
.then((response) => {
    const cloneResponse = response.clone();
    response.json().then((json) => { // Objeto JSON
        console.log(json);
    });
    cloneResponse.text().then((text) => { // Texto
        console.log(text);
    });
});



// .headers
// É uma propriedade que possui os cabeçalhos da requisição.
// É um tipo de dado iterável então podemos utilizar o 'forEach' para vermos cada um deles 

// const div = document.querySelector('div');
fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) => {
        response.headers.forEach(console.log);
    });


// .status e .ok
// Retorna o 'status' da requisição.
// Se foi '404', '200', '202' e mais.
// 'ok' retorna um valor booleano sendo 'true' para uma requisição de sucesso e false para uma sem sucesso

// const div = document.querySelector('div');
fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) => {
        setTimeout(() => {
            console.log(response.status, response.ok);
            if(response.status === 404) {
                console.log('Pagina não encontrada');
            }
        }, 1000);
    });