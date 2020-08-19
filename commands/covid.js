

module.exports = {
    name: 'covid',
    description: "says cursed",
    execute(message, args){
        const Discord = require('discord.js');

        const cheerio = require('cheerio');

        const request = require('request');

        const fs = require('fs');
        
        
        
        const api = "https://coronavirus-19-api.herokuapp.com/countries";
            const snekfetch = require("snekfetch");
            snekfetch.get(api).then(r => {
                let body = r.body;
                let country = String(args[1]);
                if(!country) return message.channel.send('Insert a country name');
                
                let data = body.find(post => post.country == country);
                if(!data) return message.channel.send("can't find country name");

                const embed = new Discord.MessageEmbed()
                    .setTitle("Corona Virus Update")
                    .setThumbnail('https://cdn2.tstatic.net/newsmaker/foto/bank/images/update-corona-virus-dunia.jpg')
                    .addField('Country', data.country)
                    .addField('Total case', data.cases)
                    .addField('Total Death', data.deaths)
                    .addField('Recovered', data.recovered)
                    .addField('Today cases', data.todayCases)
                    .addField('Today deaths', data.todayDeaths)
                    .setColor(0x0066ff)
                    .setFooter("Requested by" + message.author.tag);
                message.channel.send(embed);

                


            });

        
        
        
        
    

    }
}