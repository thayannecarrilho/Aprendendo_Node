const inquirer = require('inquirer')
const chalk = require('chalk')

const rating = [
    {
        type: 'list',
        name: 'rat',
        message: 'Avalie nosso serviço com as opções abaixo:',
        choices: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
    }
]

inquirer
    .prompt(rating)
    .then((answers) => {
        if(answers.rat === '⭐'){
            console.log(chalk.bgRed(`${answers.rat} = Ruim`))
        } else if(answers.rat === '⭐⭐'){
            console.log(chalk.bgYellow(`${answers.rat} = Razoavel`))           
        } else if(answers.rat === '⭐⭐⭐'){
            console.log(chalk.bgBlue(`${answers.rat} = Bom`))           
        } else if(answers.rat === '⭐⭐⭐⭐'){
            console.log(chalk.bgBlue(`${answers.rat} = Ótimo`))      
        } else if(answers.rat === '⭐⭐⭐⭐⭐'){
            console.log(chalk.bgGreen(`${answers.rat} = Excelente`))        
        }
    }
    )