require("dotenv").config();

const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  // Guilds are kinde of server for discord
  intents: [GatewayIntentBits.Guilds],
});

client.on(Events.ClientReady, () => {
  console.log("Logged In!");
});

client.login();
