const express = require('express'); // Importa Express
const app = express(); // Crea un'istanza dell'applicazione Express
const port = 3000; // Definisce la porta su cui il server ascolterà

const postRouter = require('./routers/posts.js'); // Importa il router dei post

// Permette di servire file statici dalla cartella 'public' (immagini, CSS, JS, ecc.)
app.use(express.static('public'));

// Definisce la rotta principale della homepage
app.get('/', (req, res) => {
    res.send('Server del mio blog'); // Messaggio di risposta
});

// Usa il router definito in `posts.js` per gestire le rotte che iniziano con `/posts`
app.use("/posts", postRouter);

// Avvia il server e lo mette in ascolto sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Messaggio in console quando il server è attivo 
});
