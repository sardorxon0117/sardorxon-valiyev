// Use express
const express = require("express");
const app = express();
app.use(express.json());
// Routes

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("select * from users")
        res.status(200).json({ message: "Hello", data: result.rows });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})

// APIs


app.listen(3000, () => {
    console.log("Server started on port 3000");
});