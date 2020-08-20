module.exports = {
    name: 'help',
    description: "says help",
    execute(message, args){
        const Discord = require('discord.js');

        const cheerio = require('cheerio');

        const request = require('request');

        const fs = require('fs');

        const embed = new Discord.MessageEmbed()
        .setTitle('Command List')
        .addField('t!meme', 'summon random meme')
        .addField('t!neko', 'summon random neko picture')
        .addField('t!cursed', 'give you random cursed image')
        .addField('t!loli', 'random loli picture will appear',)
        .addField('t!covid "country"', 'Coronavirus Case Update')
        .addField('t!r6stats "Username"', 'displays statistics of your account')
        .setColor(0xf200ff)
        .setThumbnail('https://static.zerochan.net/Tsutsukakushi.Tsukiko.full.1895115.jpg')
        .setFooter('TsukikoBot-')
        .setDescription('Hello, this is list of my commands');
        message.channel.send(embed);
    

    }
}