import inquirer from 'inquirer';

async function askName() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Wie heißen Sie?',
    },
  ]);
  console.log(`Hallo, ${answers.name}!`);
}