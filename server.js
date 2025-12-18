// Use express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// Routes

const pool = require("./config/db.js")

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("select * from users")
        res.status(200).json({ message: "Hello", data: result.rows });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ message: "Server xatosi" });
    }
})

// APIs


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});