process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Function to handle input and exit the process
function handleInput(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
}

if (process.stdin.isTTY) {
  process.stdin.on('data', handleInput);
} else {
  process.stdin.on('data', handleInput);
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
