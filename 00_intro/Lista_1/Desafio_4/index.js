const inquirer = require('inquirer')
const chalk = require('chalk')

const questions = [
    {
        type: 'list',
        name: 'fruits1',
        message: 'Qual dessas frutas citricas é a sua favorita?',
        choices: ['Laranja', 'Limão', 'Tangerina'],        
    },
    {
        type: 'list',
        name: 'fruits2',
        message: 'Escolha outra fruta de sua preferência:',
        choices: ['Morango', 'abacaxi', 'Mirtilo'],        
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(chalk.bold.italic(`Suas frutas favoritas são: ${answers.fruits1} e ${answers.fruits2}`))
    }    
    )