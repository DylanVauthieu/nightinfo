const discord = require("discord.js");

module.exports = async (bot, interaction) => {

    if (interaction.type === discord.InteractionType.ApplicationCommandAutocomplete) {

        let entry = interaction.options.getFocused();
        let choices = bot.commands.filter(cmd => cmd.name.includes(entry))

        await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choice => ({name: choice.name, value: choice.name})))
    }
    if (interaction.type === discord.InteractionType.ApplicationCommand) {

        let command = require(`../commands/${interaction.commandName}`)
        command.run(bot, interaction, interaction.options, bot.db);
    }
}