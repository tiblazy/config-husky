module.exports = (plop) => {
  plop.setGenerator('components', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component input'
      }
    ],
    actions: []
  })
}
