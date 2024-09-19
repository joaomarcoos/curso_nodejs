import chalk from 'chalk';

const nota = 9

if(nota >= 7){
    console.log(chalk.green.bold('Aprovado!'));
}else{
    console.log(chalk.red('Reprovado!'));
}
