const discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
    name: "register",
    description: "S'enregistrer sur le site",
    permission: "none",
    dm: false,
    category: "Interractions",
    options: [
        {
            type: "string",
            name: "nom",
            description: "Le nom de famille",
            required: true,
            autocomplete: false,
        }, {
            type: "string",
            name: "prénom",
            description: "Le prénom",
            required: true,
            autocomplete: false,
        }, {
            type: "number",
            name: "age",
            description: "Ton âge",
            required: true,
            autocomplete: false,
        }
    ],

    async run(bot, message, args, db) {
        let Embed = new discord.EmbedBuilder;

        Embed.setColor(bot.color);
        Embed.setTitle(`Inscriptions sur le site :`);
        Embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png");
        Embed.setDescription("Oui.")
        Embed.addFields(
            { name: "URL :", value: "https://vihpourlesnuls.alwaysdata.net/index.html" }
        )
        Embed.setTimestamp();
        Embed.setFooter({text: "Protégez vous !"});

        await message.reply({embeds: [Embed]});
        const nom = args._hoistedOptions.find(a => a.name === "nom").value;
        const prenom = args._hoistedOptions.find(a => a.name === "prénom").value;
        const age = args._hoistedOptions.find(a => a.name === "age").value;

        db.query("INSERT INTO user (FIRSTNAME, NAME, AGE) VALUES ('" + nom + "', '" + prenom + "', '" + age + "')");
    }
}