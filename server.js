// Use express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// Routes

const pool = require("./config/db.js");

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("select * from users")
        res.status(200).json({ message: "Ma'lumotlar topildi", data: result.rows });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ message: "Server xatosi" });
    }
})

app.post("/users", async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;

        if (firstname, lastname, username, email, password) {
            const result = await pool.query(`
                insert into users(firstname, lastname, username, email, password)
                values($1, $2, $3, $4, $5)
                RETURNING *`,
                [firstname, lastname, username, email, password]
            )
            if (result.rowCount>0){
                res.status(200).json({
                    message: "Foydalanuvchi muvaffaqqiyatli qo'shildi",
                    data: result.rows
                })
            } else{
                res.status(400).json({message: "Xatolik yuz berdi. Foydalanuvchi qo'shilmadi"})
            }
        } else {
            res.status(400).json({message: "Barcha maydonlarni to'ldiring"});
        }
    } catch (error) {
        res.status(404).json({message: `Xatolik: ${error}`})
    }
})

// APIs


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});