require("dotenv").config();

const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");

const { clientReadyHandler } = require("./events/clientReady");

const pingCommand = require("./commands/ping");

const client = new Client({
  // Guilds are kind of server for discord
  intents: [GatewayIntentBits.Guilds],
});

//Collection() is of type Map
client.commands = new Collection();

client.commands.set(pingCommand.data.name, pingCommand);

client.on(Events.ClientReady, clientReadyHandler);

client.login();
