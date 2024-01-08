import { Message, Client, GatewayIntentBits } from 'discord.js';
const dotenv = require('dotenv');

dotenv.config();

function removePunctuationAndTrailingSpaces(inputString: string) {
	return inputString.replace(/[,?!.:;]|\s+$/g, '');
}

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {
	console.log('Bot BDM Ready!');
});

const arrCom: string[] = [
	'ping',
	'quoi',
	'dis',
	'dit',
	'hein',
	"c'est ou",
	'oui',
	'ouais',
	'si',
	'test',
	'ok',
];
const arrRep: string[] = [
	'pong !',
	'...feur',
	'...nosaure',
	'...recteur',
	'deux !',
	'Dans ton cul !',
	'...stiti',
	'...stern',
	'...lence',
	'...icule',
	'...boommer',
];
const arrEmojis: string[] = ['😂', '🤣 ', '😜', '🤪', '🤡', '😹', '🙃', '🤖', '🤭'];

client.on('messageCreate', (message: Message) => {
	if (message.author.bot) return;
	const com: string = removePunctuationAndTrailingSpaces(message.content);

	arrCom.map((x: string) => {
		if (com.endsWith(x)) {
			message.channel.send(
				arrRep[arrCom.indexOf(x)] + ' ' + arrEmojis[Math.floor(Math.random() * arrEmojis.length)]
			);
		}
	});
});

client.login(process.env.TOKEN);
