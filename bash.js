var command = require('./command.js');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === 'pwd'){
    command.pwd();

  }
  if(cmd === "date"){
    command.date();
  }
  if (cmd === "ls") {
    command.ls();
  }
  process.stdout.write('\nprompt > ');

});
