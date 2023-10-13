const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

async function execute(interaction) {
  await interaction.reply("Pong");
  // await interaction.followUp("Pong again!");

  // throw new Error("manual error for test purpose");
}

module.exports = {
  data,
  execute,
};
