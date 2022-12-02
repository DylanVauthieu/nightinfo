const discord = require("discord.js");

module.exports = {
    name: "sidaction",
    description: "Le site officiel de sidaction",
    permission: "none",
    dm: false,
    category: "Sites utiles",

    async run(bot, message, args) {
        let Embed = new discord.EmbedBuilder;

        Embed.setColor(bot.color);
        Embed.setTitle(`Sidaction :`);
        Embed.setThumbnail("https://www.1min30.com/wp-content/uploads/2018/02/Sidaction-logo.jpg");
        Embed.setDescription("Sidaction désigne à la fois une association de lutte contre le VIH/sida, créée en 1994 et un évènement télévisuel annuel de collecte de dons pour cette association qui finance à parts égales des programmes de recherche et des associations d’aide aux malades et de prévention, en France et à l’étranger.")
        Embed.addFields(
            { name: "URL :", value: "https://www.sidaction.org/" }
        )
        Embed.setTimestamp();
        Embed.setFooter({text: "Protégez vous !"});

        await message.reply({embeds: [Embed]});
    }
}