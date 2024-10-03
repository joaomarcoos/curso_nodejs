//modulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//modulos internos
import fs from 'fs';

operacoes()

function operacoes() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {
        const action = answer['action'];
        console.info(action)

        if (action === 'Criar conta') {
            createAccount()
        }

        if(action === 'Consultar saldo'){
            checkBalance();
        }
    }).catch((err) => console.error(err))

}

//create account
function createAccount() {
    console.log(chalk.green('Obrigado por escolher nosso banco!'))
    buildAccount();
}


//Criação da conta
function buildAccount() {

    inquirer.prompt([
        {
            name: 'nameAccount',
            message: 'Qual o nome da sua conta: ?'
        }
    ]).then((answer) => {
        const accountName = answer['nameAccount'];

        if (!fs.existsSync(`accounts`)) {
            fs.mkdirSync('accounts', (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.red('Nome da conta já existe'))
            buildAccount();
        }

        try{
            fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify({ saldo: 0 }), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            console.log(chalk.green(`Conta ${accountName} criada com sucesso!`))
            operacoes();
        }catch(err){
            console.log(chalk.red('Ocorreu um erro ao salvar a conta'))
            buildAccount();
        }
        

    }).catch((err) => console.log(err))
}

function checkBalance(){
    inquirer.prompt([
        {
            name: 'checkBalance',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['checkBalance'];

        // console.log(accountName)

        if(fs.existsSync(`accounts/${accountName}.json`)){

            // console.log('conta existe!');

            fs.readFile(`accounts/${accountName}.json`, 'utf8', (err, data) => {

                if(err){
                    console.log(err);
                    return;
                }

                try {

                    const accountData = JSON.parse(data);  // Converte a string em um objeto

                    setTimeout(()=>{
                        console.log('Consultando saldo...')
                        console.log('Saldo da conta:', accountData.saldo);  // Exibe os dados da conta
                    }, 1000)

                } catch (parseErr) {
                    console.log('Erro ao converter os dados em JSON:', parseErr);
                }
            })
            
        }else{
            console.log(chalk.red('Conta não encontrada!'))
            checkBalance();
        }
    })
}