const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, channel_id } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


// Event Listeners
client.on('ready', () => {
	console.log("Bot Ready!");
	// client.commands.forEach(command => console.log(command))
});
client.on('message', gotMessage);

client.login(token);


function gotMessage(msg) {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	// this grabs the text inputted, takes away the prefix("!"), takes away all white space and then splits all the inputs by spaces.
	const args = msg.content.slice(prefix.length).trim().split(/ +/);

	// this Grabs the command by taking the first argument in the list.
	const command = args[0].toLowerCase();

	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}
};
