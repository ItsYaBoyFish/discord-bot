const Discord = require('discord.js');

module.exports = {
  name: 'woof',
  description: 'Replies with 3 wolf faces',
  execute(message, args) {
    // message.channel.send('🐺🐺🐺');
    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Wolf Bot', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(exampleEmbed);
  }
}