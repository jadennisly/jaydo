const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = ";";

Client.on('ready', ()=>{
    console.log("Bot currently running.");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "ping")){
        message.reply("Pong!")
    }
})

Client.login("NjY1ODIxOTAwNTA4ODg5MDk4.XhrXyw.yT3RGvbV5_I2tz7BMlAtMXKLHVk");