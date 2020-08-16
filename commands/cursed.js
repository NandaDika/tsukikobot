module.exports = {
    name: 'cursed',
    description: "says cursed",
    execute(message, args){
        const Discord = require('discord.js');

        const cheerio = require('cheerio');

        const request = require('request');

        const fs = require('fs');

        image(message);

        function image(message){

            var option = {
                url: "http://results.dogpile.com/serp?qc=images&q=" +"cursed images",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
        
            request(option, function(error, response, responseBody) {
                if (error) {
                    return;
                }
        
                $ = cheerio.load(responseBody);
        
                var links = $(".image a.link");
        
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
                console.log(urls);
                if (!urls.length) {
        
                    return;
                }
        
                const img = urls[Math.floor(Math.random() * urls.length)];
                const nama = message.author.tag
                const embed = new Discord.MessageEmbed()
                .setTitle('This is your cursed image')
                .setImage(img)
                .setColor(0xff0000)
                .setFooter('requested by' + nama)
                message.channel.send(embed);
            });
        
        
        }
        
    

    }
}