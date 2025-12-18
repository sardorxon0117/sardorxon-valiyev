const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgresql://sardorxonvaliyev:1gWxz1W2eEYuNyXpOEXhoNwgVg4vlidn@dpg-d515pochg0os73bm15rg-a.oregon-postgres.render.com/sardorxonvaliyevdb",
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.connect()
    .then(()=>console.log("Database connected"))
    .catch((err)=>console.log(`Database error: ${err}`));

module.exports = pool;