

// On instancie express
const app = require("express")();

// On créer le serveur http
const http = require("http").createServer(app);

// On créer la route /
app.get("/", (req, res) => {
    res.send("Bonjour");
});






// On ve demander au serveur http de répondre sur le port 3000
const PORT = 3000;

http.listen(PORT, () => console.log(`j'écoute le port ${PORT || process.env.PORT}`));

