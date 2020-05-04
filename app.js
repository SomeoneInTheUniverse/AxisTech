const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  var prefix = "a!";
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong.");
  } else if (command === "beep") {
    message.channel.send("Boop.");
  }














});
