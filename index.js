const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

function removePunctuationAndTrailingSpaces(inputString) {
  return inputString.replace(/[,?!.:;]|\s+$/g, '');
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log('Ready!');
});

// Le bot écoute les messages sur le serveur
client.on('messageCreate', (message) => {
  const com = removePunctuationAndTrailingSpaces(message.content);
  const arrCom = [
    'ping',
    'quoi',
    'dis',
    'dit',
    'hein',
    "c'est ou",
    'oui',
    'ouais',
    'si',
  ];
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

  arrCom.map((x) => {
    if (com.endsWith(x)) {
      message.channel.send(arrRep[arrCom.indexOf(x)]);
    }
  });
});

client.login(process.env.TOKEN);
