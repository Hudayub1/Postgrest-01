const pool = require('./pool');

getAllUsernames = async () => {
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
} 

insertUsername = async (username) => {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

deleteAllUsername = async () => {
    await pool.query("DELETE FROM usernames")
}

searchUsername = async (searchTerm) => {
    const {rows} = await pool.query(
        "SELECT * FROM usernames WHERE username ILIKE $1",
    [`% ${searchTerm}%`]
    );
    return rows
}



module.exports = {
    getAllUsernames,
    insertUsername,
    deleteAllUsername,
    searchUsername
};
