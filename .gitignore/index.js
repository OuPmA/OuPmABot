const Discord = require('discord.js');
const client = new Discord.Bot();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(process.env.TOKEN);
