const discord = require("discord.js");

module.exports = {
    name: "sidainfoservice",
    description: "Le site officiel de sida info service",
    permission: "none",
    dm: false,
    category: "Sites utiles",

    async run(bot, message, args) {
        let Embed = new discord.EmbedBuilder;

        Embed.setColor(bot.color);
        Embed.setTitle(`Sida info service :`);
        Embed.setThumbnail("https://stockagehelloassoprod.blob.core.windows.net/images/logos/sida-info-service-sis-19d0bf28197647d5abee605f02de7595.png");
        Embed.setDescription("Sida Info Service,est une association française qui met à disposition du public plusieurs lignes téléphoniques, ainsi que des canaux numériques, permettant d’obtenir des renseignements sur les questions relatives au VIH au SIDA, ainsi que sur les IST, mais également sur les hépatites, les questions liées à l'orientation sexuelle et d'identité de genre.")
        Embed.addFields(
            { name: "URL :", value: "https://www.sida-info-service.org/" }
        )
        Embed.setTimestamp();
        Embed.setFooter({text: "Protégez vous !"});

        await message.reply({embeds: [Embed]});
    }
}