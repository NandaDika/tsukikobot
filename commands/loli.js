module.exports = {
    name: 'loli',
    description: "says loli",
    execute(message, args){
        const Discord = require('discord.js');

        const cheerio = require('cheerio');

        const request = require('request');

        const fs = require('fs');

        image(message);

        function image(message){

            var option = {
                url: "http://results.dogpile.com/serp?qc=images&q=" +"anime loli art",
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
        
                message.channel.send("```Be careful FBI is watching you!```"), message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        
            });
        
        
        }
        
    

    }
}