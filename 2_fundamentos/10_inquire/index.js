import inquirer from 'inquirer';


inquirer.prompt([
    {
        name: 'p1', 
        message: 'Qual sua primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual sua segunda nota?'
    }
]).then((answers)=>{
    const media = (parseInt(answers.p1) + parseInt(answers.p2))/2
    console.log(`A média das notas é ${media}`);
 }).catch((error) => {
    console.error(error);
})