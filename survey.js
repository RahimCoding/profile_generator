const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? (Nicknames are fine! :) ', (name) => {
  rl.question('Whats an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while you do that activity? ', (listen) => {
      rl.question('What meal is your favourite? e.g breakfast, lunch or dinner? ', (meal) => {
        rl.question('What do you like to eat after said meal? ', (eat) => {
          rl.question('What sport is your favourite?', (sport) => {
            rl.question('What is your superpower? tell us in a few words what makes you amazing! ', (power) => {
              rl.write(`name: ${name} \n`);
              rl.write(`Favourite acitivity: ${activity} \n`);
              rl.write(`Listen while active: ${listen} \n`);
              rl.write(`Favourite Meal: ${meal} \n`);
              rl.write(`eat after meal: ${eat} \n`);
              rl.write(`Favourite Sport: ${sport} \n`);
              rl.write(`Super Power!: ${power} \n`);
              rl.close();
            })
          })
        })
      })
    })
  })
})  