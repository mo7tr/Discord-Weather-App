require("dotenv").config();

const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");

const { clientReadyHandler } = require("./events/clientReady");
const { interactionCreateHandler } = require("./events/interactionCreate");

const pingCommand = require("./commands/ping");
const forecastCommand = require("./commands/forecast");
const astroCommand = require("./commands/astro");

const client = new Client({
  // Guilds are kind of server for discord
  intents: [GatewayIntentBits.Guilds],
});

//Collection() is of type Map
client.commands = new Collection();

client.commands.set(pingCommand.data.name, pingCommand);
client.commands.set(forecastCommand.data.name, forecastCommand);
client.commands.set(astroCommand.data.name, astroCommand);

client.once(Events.ClientReady, clientReadyHandler);

client.on(Events.InteractionCreate, interactionCreateHandler);

client.login();
