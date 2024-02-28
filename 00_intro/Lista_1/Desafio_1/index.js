const inquirer = require("inquirer")
const chalk = require("chalk")

const questions = [
    {
        type: 'list',
        name: 'cor',
        message: 'Qual a sua cor preferida?',
        choices: ['Vermelho', 'Verde', 'Azul']
    }
]
inquirer
    .prompt(questions)
    .then(answers => {
        if(answers.cor === 'Vermelho'){
            console.log(chalk.bold.black.bgRed('Sua cor favorita é:', answers.cor)) 
        } else if(answers.cor === 'Verde'){
            console.log(chalk.bold.black.bgGreen('Sua cor favorita é:', answers.cor)) 
        } else if(answers.cor === 'Azul'){
            console.log(chalk.bold.black.bgBlue('Sua cor favorita é:', answers.cor))
        }               
    })

