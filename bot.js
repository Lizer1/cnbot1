const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('welcome 2 CN,Clan');
  }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت لا تطول');
  }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('https://discord.gg/CY3DJmq');
  }
});


client.login('NTMxMzYzOTM2NDAzMTkzODU3.DxM3UA.lQaCc4O9GrLeNGdYrBV9LEq89yM');
