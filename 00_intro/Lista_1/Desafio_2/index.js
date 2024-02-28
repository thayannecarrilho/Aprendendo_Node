const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer 
    .prompt([
        { name: 'question', message: 'Qual é o seu nome?'},
    ])
    .then((answers) => {
        console.log(chalk.bold.italic(`Seja bem vindo(a), ${answers.question}`))
    })
