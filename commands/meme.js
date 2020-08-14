module.exports = {
    name: 'meme',
    description: "says meme",
    execute(message, args){
        const Discord = require('discord.js');

        const cheerio = require('cheerio');

        const request = require('request');

        const fs = require('fs');

        image(message);

        function image(message){

            var option = {
                url: "http://results.dogpile.com/serp?qc=images&q=" +"1cak shuffel",
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
        
                message.channel.send("```Here Is Your Meme Litle Shit!```"), message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        
            });
        
        
        }
        
    

    }
}