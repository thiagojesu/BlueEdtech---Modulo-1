console.clear();
const prompt = require('prompt-sync')();

console.log('Você é um aluno recem chegado da BLUEDTECH, sem conhecimento algum em programação.')
console.log('Você inicia suas aulas, e já no primeiro dia, você é informado de um projeto, no qual, você terá 1 semana para fazer!!!!')
console.log('O que você irá fazer?  ');

let cont = 0;


console.log();

console.log('Digite "S" para sim e "N" para não');
console.log('Você vai estudar o modulo 0?');
let pergunta1 = prompt().toLowerCase();

if (pergunta1 =='s'){
    cont++;
};

let resposta1 = pergunta1;

while (resposta1 != 's' && resposta1 != 'n'){
    console.log('Responda com "s" ou "n"');
    resposta1 = prompt ().toLowerCase();
};


console.log();

console.log('Você vai prestar atenção nas aulas?');
let pergunta2 = prompt().toLowerCase();

if (pergunta2 =='s'){
    cont++;
};

let resposta2 = pergunta2;

while (resposta2 != 's' && resposta2 != 'n'){
    console.log('Responda com "s" ou "n"');
    resposta2 = prompt ().toLowerCase();
};


console.log();

console.log('Você vai fazer perguntas para o professor e sanar suas dúvidas?')
let pergunta3 = prompt().toLowerCase();

if (pergunta3 =='s'){
    cont++;
};

 resposta3 = pergunta3;

 while (resposta3 != 's' && resposta3 != 'n'){
     console.log('Responda com "s" ou "n"');
     resposta3 = prompt ().toLowerCase();
 };


console.log();

console.log('Você vai fazer exercícios  de fixação?');
let pergunta4 = prompt().toLowerCase();

if (pergunta4 =='s'){
    cont++;
};

let resposta4 = pergunta4;

while (resposta4 != 's' && resposta4 != 'n'){
console.log('Responda com "s" ou "n"');
resposta4 = prompt ().toLowerCase();
};


console.log();

console.log('Você vai dedicar HORAS todos os dias para estudar programação, mesmo tendo que abdicar de muitas horas de sono?');
let pergunta5 = prompt().toLowerCase();

if (pergunta5 =='s'){
    cont++;
};

let resposta5 = pergunta5;

while (resposta5 != 's' && resposta5 != 'n'){
    console.log('Responda com "s" ou "n"');
    resposta5 = prompt().toLowerCase();
    };

    
console.log();

 if (cont == 5){
     console.log('Você Conseguiu!! entregou seu projeto, e ainda conseguiu nota maxima!!!!')
 }  else if (cont == 4){
     console.log('Você conseguiu entregar seu projeto, e tirou nota 7')
 }  else if (cont == 3){
     console.log('Você entregou seu projeto e tiou nota 6')
 }  else if (cont == 2){
     console.log('Você entregou seu projeto, mas tirou nota 4')
 }  else if (cont == 1){
     console.log('Você entregou seu projeto, mas tirou nota 2')
 }  else {
    console.log('Você se esqueceu de entregar seu trabalho, e levou uma bronca e tanto dos professores da blue... SEU IRRESPONSAVEL!!!')
}


console.log();