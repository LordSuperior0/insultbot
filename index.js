
const Discord = require('discord.js');
const bot = new Discord.Client();

var Insults = ['who u', 'u gay', 'u suck', '*insert insult*', 'M e G a G a Y', 'basically jones', 'idk', 'spaghett', 'stoopid', 'wut'];

bot.on('message', (message) => {
  if (message.content.startsWith('.') === true) {
    if (message.content.toLowerCase().substr(1) === 'insult') {
      let insultnum = Math.floor(Math.random()*Insults.length);
    
      message.reply(Insults[insultnum]);
    }
    if (message.content.toLowerCase().substr(1) === 'help')
      message.reply('\n.help - you\'re looking at it \n.insult - get insulted \n.insult list - look at the list of current insults \n.add insult - add your own insult to the list');
      if (message.content.toLowerCase().substr(1,10) === 'add insult') {
        Insults.push(message.content.substr(12));
        message.reply('done');
      }
      if (message.content.toLowerCase().substr(1) === 'insult list') {
        message.reply(Insults);
      }
  }
});

bot.login('NTQ2NTMxMjQxMzY1NzMzMzc4.D0pksg.lv6Lgh83M8eN_cAp_DXweR0Exj8');