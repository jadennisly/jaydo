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

Client.login("NjY1ODIxOTAwNTA4ODg5MDk4.XiyO3A.OhoJU03L0_2stgaXec_t8GenzgY");