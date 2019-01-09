const brain = require('brain.js');

const network = new brain.NeuralNetwork();

//Definition of variables
//var 1 input smoker (0 non, 1)
//var 2 input > 55 years old (0 non, 1)
//output Lung cancer (0 non, 1)
network.train([
    { input: [0, 1], output: [1]}, //Patient is non smoker > 55 result Lung Cancer
    { input: [1, 1], output: [1]}, // 
    { input: [0, 0], output: [0]}, // 
    { input: [1, 0], output: [1]}, //
    { input: [0, 0], output: [1]},
    { input: [1, 1], output: [1]},
    { input: [1, 1], output: [1]},
    { input: [0, 1], output: [0]},
    { input: [1, 1], output: [1]},
    { input: [1, 1], output: [0]} // Patient is smoker, > 55 but no lung cancer
]);

const output = network.run([1, 1]); 

console.log(`Prob: ${output}`);