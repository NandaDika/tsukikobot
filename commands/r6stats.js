module.exports = {
    name: 'r6stats',
    description: "says cursed",
    execute(message, args){
        const Discord = require('discord.js');
        const request = require('request');
        const cheerio = require('cheerio');
        const jsonfile = require('jsonfile');
        const username = args[1];
        const fs = require('fs');

        request(`https://r6.tracker.network/profile/pc/${username}/detailed`, function(error, response, html){
            if(!error && response.statusCode == 200){
                const $ = cheerio.load(html);
                let r6name = $('#profile > div.trn-profile-header.trn-card > div > h1 > span:nth-child(1)').text();
                let r6kd = $('#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value').text();
                let r6totalkill = $('#profile > div.trn-scont > div > div:nth-child(3) > div.trn-card__content > div > div:nth-child(10) > div.trn-defstat__value').text();
                let r6wrc = $('#profile > div.trn-scont > div > div.r6-pvp-grid > div:nth-child(1) > div.trn-card__content > div > div:nth-child(7) > div.trn-defstat__value').text();
                let r6wrr = $('#profile > div.trn-scont > div > div.r6-pvp-grid > div:nth-child(2) > div.trn-card__content > div > div:nth-child(7) > div.trn-defstat__value').text();
                let r6logo = $('#profile > div.trn-profile-header.trn-card > div > div.trn-profile-header__avatar.trn-roundavatar.trn-roundavatar--white').html();
                let r6hs = $('#profile > div.trn-scont > div > div:nth-child(2) > div.trn-card__content > div > div:nth-child(1) > div.trn-defstat__value').text();
                

                const linkproc = r6logo.slice(11, 105);
                console.log(r6logo, linkproc);
                
                
                const embed = new Discord.MessageEmbed()
                .setTitle('Rainbow Six Siege Stats')
                .addField('Username', r6name)
                .addField('K/D', r6kd)
                .addField('Win rate Casual', r6wrc)
                .addField('Win rate Ranked', r6wrr)
                .addField('TotalKill', r6totalkill)
                .addField('Headshot Percentage', r6hs)
                .setColor(0xff0000)
                .setThumbnail(linkproc)
                .setFooter('more information visit: ' + `https://r6.tracker.network/profile/pc/${username}`);
                
                message.channel.send(embed);
                

            }
        
        });
        
        
        
        
    

    }
}