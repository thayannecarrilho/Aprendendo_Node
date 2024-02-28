const inquirer = require('inquirer')
const chalk = require('chalk')

const question = [
    {type: 'list',
    name: 'confirm', 
    message: 'Você deseja continuar?',
    choices: ['sim', 'não']}
]

inquirer
    .prompt(question)
    .then((answers) => {
        if(answers.confirm === 'sim'){
            console.log(chalk.bgGreen(`Ok, vamos continuar`))
        } else{
            console.log(chalk.bgRed(`Atendimento encerrado`))
        }
    }
    )