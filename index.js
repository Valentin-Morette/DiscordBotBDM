const { Client, GatewayIntentBits, bold, italic, time } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

function removePunctuationAndTrailingSpaces(inputString) {
	return inputString.replace(/[,?!.:;]|\s+$/g, '');
}

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {
	console.log('Bot BDM Ready!');
});

client.on('messageCreate', (message) => {
	const com = removePunctuationAndTrailingSpaces(message.content);
	const arrCom = ['ping', 'quoi', 'dis', 'dit', 'hein', "c'est ou", 'oui', 'ouais', 'si'];
	const arrRep = [
		'pong !',
		'...feur',
		'...nosaure',
		'...recteur',
		'deux !',
		'Dans ton cul !',
		'...stiti',
		'...stern',
		'...lence',
	];
	const arrEmojis = ['😂', '🤣 ', '😜', '🤪', '🤡', '😹', '🙃', '🤖', '🤭'];

	arrCom.map((x) => {
		if (com.endsWith(x)) {
			message.channel.send(
				arrRep[arrCom.indexOf(x)] + ' ' + arrEmojis[Math.floor(Math.random() * arrEmojis.length)]
			);
		}
	});
});

client.on('messageDelete', (message) => {
	message.channel.send(`Message supprimé par ${message.author.username} : ${message.content}`);
});

client.on('channelCreate', (channel) => {
	console.log(channel);
	channel.send('Nouveau channel créé !');
});

client.login(process.env.TOKEN);
