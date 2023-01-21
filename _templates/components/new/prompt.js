module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'level',
        message: 'Which Component category?',
        choices: ['pure', 'compound', 'layout'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { level, name } = answers
      if (!name) throw new Error('Component name cannot be empty.')
      return { level, name }
    })
  },
}
