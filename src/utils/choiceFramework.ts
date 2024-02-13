import inquirer from 'inquirer';

export type IChoiceFramework = 'express'

export const choiceFramework = async (): Promise<IChoiceFramework> => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Which framework would you like to use?',
      choices: ['Express'],
    }
  ]);

  console.log(`You chose ${answers.framework}! Setting up your project 🛠️...\n`);

  return answers.framework;
}