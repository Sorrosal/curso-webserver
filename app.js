const ex = require ("express")

const app = ex();



app.get("/", (req, res) =>{
    res.send("Hello sergio")
})

app.listen("3000")