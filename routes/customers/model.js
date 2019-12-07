const config = require("./../../config.json");
const jwt = require("jsonwebtoken");
const con = require("./../../_helpers/db");

module.exports = {
    getAll
};

async function getAll() {
    let query = "select * from customers";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) reject(err);
            resolve(JSON.stringify(result));
        });
    });
}