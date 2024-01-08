"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv = require('dotenv');
dotenv.config();
function removePunctuationAndTrailingSpaces(inputString) {
    return inputString.replace(/[,?!.:;]|\s+$/g, '');
}
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.MessageContent],
});
client.on('ready', () => {
    console.log('Bot BDM Ready!');
});
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
client.on('messageCreate', (message) => {
    if (message.author.bot)
        return;
    const com = removePunctuationAndTrailingSpaces(message.content);
    arrCom.map((x) => {
        if (com.endsWith(x)) {
            message.channel.send(arrRep[arrCom.indexOf(x)] + ' ' + arrEmojis[Math.floor(Math.random() * arrEmojis.length)]);
        }
    });
});
client.login(process.env.TOKEN);
