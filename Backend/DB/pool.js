require('dotenv').config();
const {Pool} = require("pg");


console.log('Environment Variables:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME, // Changed from DB_top_users to DB_NAME
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT
  });

// always use proceess.env. This one is hardcoded
module.exports = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


// Connection URI

// module.exports = new Pool({
//     ConnectionString: "postgresql://hud:020516@localhost:5432/top_users"
// })