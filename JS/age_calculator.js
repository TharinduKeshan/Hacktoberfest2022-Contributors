import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What is your age? ');

console.log(`Your age is days is ${answer * 356}`);

rl.close();
