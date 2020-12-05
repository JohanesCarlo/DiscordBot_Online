require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("error", console.error);

client.on("ready", () => {
    console.log(`${client.user.username} is now Online!`);
    client.user.setActivity("Hi!")
});

client.on("message", function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content === "hi") {
        message.channel.send("Hello");
    }
});

client.login(process.env.TOKEN)