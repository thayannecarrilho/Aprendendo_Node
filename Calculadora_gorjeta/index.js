/*Crie um programa de linha de comando que simule uma calculadora de gorjetas para dividir a conta entre um grupo de pessoas em um restaurante. O programa deve permitir ao usuário inserir o valor total da conta e o número de pessoas no grupo. Em seguida, ele deve solicitar ao usuário que insira o nome de cada pessoa e o valor que cada uma deseja contribuir. O programa deve calcular e exibir a quantia que cada pessoa deve pagar, incluindo uma gorjeta de 10% sobre o valor total da conta.*/

const inquirer = require("inquirer")
const chalk = require("chalk")

const questions = [
    {
        name: 'valor',
        message: 'Digite o valor total da conta:',
    },
    {
        name: 'count_people',
        message: 'Quantas pessoas consumiram:',
    },
    {
        name: 'nome',
        message: 'Digite seu nome:',
    },
    {
        type: 'list',
        name: 'gorjeta',
        message: 'Classifique meu serviço e contribua com uma gorjeta:',
        choices: ['Bom = 15%', 'Ótimo = 20%', 'Excelente = 25%']
    }
]

inquirer
    .prompt(questions)
   

    .then((answers) => {   
        const unit = (answers.valor/answers.count_people) 
        const final1 = unit * 1.15
        const final2 = unit * 1.20
        const final3 = unit * 1.25


        console.log(`O valor a ser pago para cada consumidor é R$ ${unit.toFixed(2)}`)            
        if(answers.gorjeta === 'Bom = 15%'){
            
            console.log(`Obrigada pela Gorjeta ${answers.nome}, o valor a ser pago é de R$ ${final1.toFixed(2)}`)
        }  else if(answers.gorjeta === 'Ótimo = 20%'){
            
            console.log(`Obrigada pela Gorjeta ${answers.nome}, o valor a ser pago é de R$ ${final2.toFixed(2)}`)
        }  else if(answers.gorjeta === 'Excelente = 25%'){
           
            console.log(`Obrigada pela Gorjeta ${answers.nome}, o valor a ser pago é de R$ ${final3.toFixed(2)}`)
        }  else{
            console.log("erro")
        }        
    })

