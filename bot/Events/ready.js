const discord = require("discord.js");
const loadData = require("../loaders/LoadDatabase");
const LoadSlashCommands = require("../loaders/LoadSlashCommands");

module.exports = async bot => {
    bot.db = await loadData();
    bot.db.connect(function () {
        console.log("Bdd connectée !");
    })

    await LoadSlashCommands(bot);
    console.log(`${bot.user.tag} est en ligne !`);
}
