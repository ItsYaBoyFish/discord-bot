const Discord = require('discord.js');
const UIConfig = require('../config.json').UI;

module.exports = {
  name: 'help',
  description: 'Replies with help for new server users.',
  execute(message, args) {
    console.log(message.client.user.avatar)
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor(UIConfig.EmbedColor)
    .setTitle('Wolf Bot Help')
    .setAuthor('Wolf Bot', 'https://discord.js.org', message.client.user.avatar)
    .setDescription('Helful content for using the Wolf Bot')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaziDT78lQlvE1MY3cP-mX-AfFWK3ppYYh_g&usqp=CAU')
    // .addFields(
    //   { name: 'Regular field title', value: 'Some value here' },
    //   { name: '\u200B', value: '\u200B' },
    //   { name: 'Inline field title', value: 'Some value here', inline: true },
    //   { name: 'Inline field title', value: 'Some value here', inline: true },
    // )
    // .addField('Inline field title', 'Some value here', true)
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Wolf Bot');

    message.channel.send(exampleEmbed);
  }
}