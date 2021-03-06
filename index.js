

// On instancie express
const app = require("express")();

// On créer le serveur http
const http = require("http").createServer(app);

// On instancie socket.io il prend http comme paramètre de démarrage
const io = require("socket.io")(http);


// On créer la route /
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// On écoute l'évènement "connection" de socket.io
io.on("connection", socket => {
    console.log("Une connection s'active");

    // On écoute les diconnections
    socket.on("disconnect", () => console.log("Un utilisateur s'est déconnecté"));

    // On gère le chat
    socket.on("chat_message", msg => {
        // console.log(msg);
        // On relaie le message vers tous les utilisateurs connectés
        io.emit("received_message", msg);
    });
});


// On ve demander au serveur http de répondre sur le port 3000
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => console.log(`j'écoute le port ${PORT}`));

