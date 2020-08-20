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
    client.user.setActivity('NekoKing- || t!help', {type: 'WATCHING'}).catch(console.error);
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
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "help":
            client.command.get('help').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "covid":
            client.command.get('covid').execute(message, args);
        
        break;
    }
});

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "r6stats":
            client.command.get('r6stats').execute(message, args);
            
        
        break;
    }
});


client.on('message',msg => {
    if (msg.content === 'Anjing') {
        msg.reply(':angry:');
    }
});

client.on('message',msg => {
    if (msg.content === 'tsukiko') {
        msg.reply("?????");
    }
});

client.on('message', msg => {
    if (msg.content === 'Halo') {
      msg.reply('Halo juga :)');
    }
  });

  client.login(process.env.token);
