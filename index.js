const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log("Server Online");
});
const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv").config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
async function GetImage(string) {
  const res = await fetch(`${process.env.URL}/${string}`);
  const data = await res.json();
  return data?.url;
}
async function GetAImage(string) {
  const res = await fetch(`${process.env.URLA}/${string}`);
  const data = await res.json();
  return data?.url;
}
client.on("ready", () => {
  console.log("I am ready!" + ` ${client.user.tag}`);
});

const info = [
  "waifu",
  "awoo",
  "neko",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

const AdultInfo = ["waifu", "neko", "trap", "blowjob"];

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  const command = msg.content.toLowerCase();
  if(command == "info"){
    return msg.reply(info.join(", "))
  }
  if (command == "ainfo") {
    return msg.reply(AdultInfo.map(cat=> `a${cat}`).join(", "));
  }
  info.map(async (cat) => {
    if (command === cat) {
      const a = await GetImage(cat);
      return msg.reply({ content: a });
    }
  });
  AdultInfo.map(async (cat) => {
    const word = command.substring(1);
    if (word === cat) {
      const a = await GetAImage(cat);
      return msg.reply({ content: a });
    }
  });

});

client.login(process.env.TOKEN);
