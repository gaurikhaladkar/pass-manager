var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.fm !== 'undefined' && typeof argv.lm !== 'undefined'){
	console.log('Hello' + argv.fm + argv.lm);
	
} 
else if (command === 'hello' && typeof argv.fm !== 'undefined' && typeof argv.lm == 'undefined')
{
	console.log('Hello world!' + argv.fm);
}
else if (command === 'hello')
{
	console.log('Hello world!');
}