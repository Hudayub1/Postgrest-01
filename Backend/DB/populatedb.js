const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Odin'),
    ('Damon');
`;

async function main() {
    console.log("seeding...")
    const client = new Client({   
        
        host: "localhost", //wherever db is stored?
        user: "hud",
        database: "top_users",
        password: "020516",
        port: 5432 // default port

    });
    
    try {
        await client.connect();
        await client.query(SQL);
        return true;
    }catch (err) {
        console.error('seeding failed;', err);
        throw err;
    }finally {
        await client.end();
        console.log("done");
    }
        
};

main()