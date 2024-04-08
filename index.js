const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv").config()
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
async function GetImage(string){
  const res = await fetch(`${process.env.URL}/${string}`);
  const data = await res.json()
  return data?.url
}

client.on("ready", () => {
  console.log("I am ready!" + ` ${client.user.tag}`);
});

const info = `
  waifu,
  awoo,
  neko,
  megumin,
  bully,
  cuddle,
  cry,
  hug,
  kiss,
  lick,
  pat,
  smug,
  bonk,
  yeet,
  blush,
  smile,
  wave,
  highfive,
  handhold,
  nom,
  bite,
  glomp,
  slap,
  kill,
  kick,
  happy,
  wink,
  poke,
  dance,
  cringe,
`;

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  if (msg.content === "ping") {
    msg.reply({content: "pong"});
  }
  if(msg.content === "waifu"){
    const a = await GetImage("waifu")
    msg.reply({ content: a });
  }
  if (msg.content === "neko") {
    const a = await GetImage("neko");
    msg.reply({ content: a });
  }
  if (msg.content === "megumin") {
    const a = await GetImage("megumin");
    msg.reply({ content: a });
  }
  if (msg.content === "bully") {
    const a = await GetImage("bully");
    msg.reply({ content: a });
  }
  if (msg.content === "cuddle") {
    const a = await GetImage("cuddle");
    msg.reply({ content: a });
  }
  if (msg.content === "cry") {
    const a = await GetImage("cry");
    msg.reply({ content: a });
  }
  if (msg.content === "hug") {
    const a = await GetImage("hug");
    msg.reply({ content: a });
  }
  if (msg.content === "awoo") {
    const a = await GetImage("awoo");
    msg.reply({ content: a });
  }
  if (msg.content === "kiss") {
    const a = await GetImage("kiss");
    msg.reply({ content: a });
  }
  if (msg.content === "lick") {
    const a = await GetImage("lick");
    msg.reply({ content: a });
  }
  if (msg.content === "pat") {
    const a = await GetImage("pat");
    msg.reply({ content: a });
  }
  if (msg.content === "smug") {
    const a = await GetImage("smug");
    msg.reply({ content: a });
  }
  if (msg.content === "bonk") {
    const a = await GetImage("bonk");
    msg.reply({ content: a });
  }
  if (msg.content === "yeet") {
    const a = await GetImage("yeet");
    msg.reply({ content: a });
  }
  if (msg.content === "blush") {
    const a = await GetImage("blush");
    msg.reply({ content: a });
  }
  if (msg.content === "smile") {
    const a = await GetImage("smile");
    msg.reply({ content: a });
  }
  if (msg.content === "wave") {
    const a = await GetImage("wave");
    msg.reply({ content: a });
  }
  if (msg.content === "highfive") {
    const a = await GetImage("highfive");
    msg.reply({ content: a });
  }
  if (msg.content === "handhold") {
    const a = await GetImage("handhold");
    msg.reply({ content: a });
  }
  if (msg.content === "nom") {
    const a = await GetImage("nom");
    msg.reply({ content: a });
  }
  if (msg.content === "bite") {
    const a = await GetImage("bite");
    msg.reply({ content: a });
  }
  if (msg.content === "slap") {
    const a = await GetImage("slap");
    msg.reply({ content: a });
  }
  if (msg.content === "kill") {
    const a = await GetImage("kill");
    msg.reply({ content: a });
  }
  if (msg.content === "kick") {
    const a = await GetImage("kick");
    msg.reply({ content: a });
  }
  if (msg.content === "happy") {
    const a = await GetImage("happy");
    msg.reply({ content: a });
  }
  if (msg.content === "wink") {
    const a = await GetImage("wink");
    msg.reply({ content: a });
  }
  if (msg.content === "poke") {
    const a = await GetImage("poke");
    msg.reply({ content: a });
  }
  if (msg.content === "dance") {
    const a = await GetImage("dance");
    msg.reply({ content: a });
  }
  if (msg.content === "cringe") {
    const a = await GetImage("cringe");
    msg.reply({ content: a });
  }
  if (msg.content === "info") {
    msg.reply({ content: info });
  }
 });

client.login(process.env.TOKEN);
