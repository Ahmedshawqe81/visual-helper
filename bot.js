const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = ('!')

const d = new Discord.RichEmbed()
.setDescription(`${prefix}help-system
${prefix}help-music
${prefix}help-giveaway
${prefix}help-files`)
.setTitle('Visual Studio Codes Helper V0.1')
.setFooter('VS V0.1 , All Rights Reserved ')
.setColor('Random')


client.on('message', message => {
    if (!message.content.startsWith(`${prefix} + 'help'`))
    message.channel.send(d) 
    return;
});



client.on('ready', message => {
 console.log('Ready')
});



client.login(process.env.BOT_TOKEN);
