const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "t!";

const cheerio = require('cheerio');

const request = require('request');

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command =require(`./commands/${file}`);

    client.command.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online');
});

client.on('ready', () =>{
    client.user.setActivity('NekoKing-', {type: 'WATCHING'}).catch(console.error);
})



client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "neko":
            client.command.get('neko').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "meme":
            client.command.get('meme').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "cursed":
            client.command.get('cursed').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "loli":
            client.command.get('loli').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send("```t!neko``` summon random neko pic, ```t!meme``` summon random memes, ```t!loli``` summon random loli");
    }
});

client.on('message',msg => {
    if (msg.content === 'Anjing') {
        msg.reply(':angry:');
    }
});

client.on('message',msg => {
    if (msg.content === 'tsukiko') {
        msg.reply("Apa manggil-manggil, Gw laporin ke @『NekoKing-』#4262");
    }
});

client.on('message', msg => {
    if (msg.content === 'Halo') {
      msg.reply('Apaan sih anying sok deket >:u');
    }
  });

  client.login(process.env.token);