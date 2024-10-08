//modulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//modulos internos
import fs, { readFile, write, writeFile } from 'fs';

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
                'Cancelar conta',
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

        if(action === 'Depositar'){
            deposit();
        }

        if(action === 'Sacar'){
            withdraw()
        }

        if(action === 'Cancelar conta'){
            cancelAccount();
        }

        if(action === 'Sair'){
            console.log(chalk.green('Obrigado por utilizar nosso banco, Até logo!'))
            process.exit(0);
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
            return;
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

function deposit(){
    inquirer.prompt([
        {
            name:'deposit',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['deposit'];

        if(fs.existsSync(`accounts/${accountName}.json`)){
            inquirer.prompt([
                {
                    name: 'value',
                    message: 'Qual o valor do depósito?'
                }
            ]).then((answer)=>{
                const value = parseFloat(answer['value']);
                console.log(value);

                readFile(`accounts/${accountName}.json`, (err, data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }

                    try{
                        const accountData = JSON.parse(data);
                        accountData.saldo += value;
                        
                        fs.writeFile(`accounts/${accountName}.json`, JSON.stringify(accountData), (err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                console.log(chalk.green(`Depósito de ${value} realizado com sucesso!`))
                                operacoes();
                            }
                        })
                    }catch(err){
                        console.error(err)
                    }
                })
            })
        }else{
            console.log(chalk.red('Conta não encontrada!'))
            deposit();
        }
    })
}

// sacar

function withdraw(){
    inquirer.prompt([
        {
            name:'withdraw',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['withdraw'];

        if(fs.existsSync(`accounts/${accountName}.json`)){
            inquirer.prompt([
                {
                    name: 'value',
                    message: 'Qual o valor do saque?'
                }
            ]).then((answer)=>{
                const value = parseFloat(answer['value']);
                
                readFile(`accounts/${accountName}.json`, (err, data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }

                    try{
                        const accountData = JSON.parse(data);
                        
                        if(accountData.saldo >= value){
                            accountData.saldo -= value

                            writeFile(`accounts/${accountName}.json`, JSON.stringify(accountData), (err)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(chalk.green(`Saque de ${value} realizado com sucesso!`))
                                    operacoes();
                                }
                            })
                        }else{
                            console.log(chalk.red('Saldo insuficiente!'))
                            withdraw();
                        }
                    }catch(erro){
                        console.error(err)
                    }
                })
            })
        }else{
            console.log(chalk.red('Conta não encontrada!'))
            withdraw();
        }
    })
}

//Excluir/Cancelar conta

function cancelAccount(){
    inquirer.prompt([
        {
            name:'cancelAccount',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['cancelAccount'];
    
        if(fs.existsSync(`accounts/${accountName}.json`)){

            fs.unlinkSync(`accounts/${accountName}.json`)

            console.log(chalk.green(`Conta ${accountName} cancelada com sucesso!`))
            operacoes();
        }else{
            console.log(chalk.red('Conta não encontrada!'))
            cancelAccount();
        }
    })
}