const mysql = require("mysql");

module.exports = async () => {
    let db = await mysql.createConnection({
        host: "mysql-vihpourlesnuls.alwaysdata.net",
        user: "291412_root",
        password: "bdd07052004*",
        database: "vihpourlesnuls_bdd"
    })

    return (db);
}