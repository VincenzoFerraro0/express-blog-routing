const express = require('express');
const router = express.Router(); // Creiamo un router Express per gestire le rotte relative ai post

// array dei posts

const posts = [
    {
        title: "Cracker alla barbabietola",
        content: `I cracker alla barbabietola sono uno snack stuzzicante e originale...`,
        image: "/img/cracker_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        title: "Ciambellone soffice",
        content: `Il ciambellone soffice è un dolce classico della tradizione...`,
        image: "/img/ciambellone.jpeg",
        tags: ["Dolci", "Colazione", "Ricette tradizionali"]
    },
    {
        title: "Pane fritto dolce",
        content: `Il pane fritto dolce è una ricetta semplice e golosa...`,
        image: "/img/pane_fritto_dolce.jpeg",
        tags: ["Dolci", "Merenda", "Ricette tradizionali"]
    },
    {
        title: "Pasta alla barbabietola",
        content: `La pasta alla barbabietola è un primo piatto colorato e dal sapore delicato...`,
        image: "/img/pasta_barbabietola.jpeg",
        tags: ["Primi piatti", "Ricette vegetariane", "Colorate e creative"]
    },
    {
        title: "Torta paesana",
        content: `La torta paesana è un dolce della tradizione lombarda...`,
        image: "/img/torta_paesana.jpeg",
        tags: ["Dolci", "Ricette tradizionali", "Riciclo in cucina"]
    }
];

// Rotta per restituire l'intera lista dei post in formato JSON
router.get('/', function (req, res) {
    res.json(posts); // Invia l'array di post come JSON
});


// Rotta per ottenere i dettagli di un singolo post tramite ID (indice dell'array)
router.get('/:id', function (req, res) {
    const postId = parseInt(req.params.id); // Converte il parametro in numero
    if (postId >= 0 && postId < posts.length) {
        res.json(posts[postId]); // Restituisce il post corrispondente
    } else {
        res.status(404).json({ error: "Post non trovato" }); // Gestione errore se ID non valido
    }
});

// Rotta per creare un nuovo post (da implementare con database)
router.post('/', function (req, res) {
    res.send('Creazione di un nuovo post');
});

// Rotta per aggiornare interamente un post tramite ID
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// Rotta per modificare parzialmente un post tramite ID
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// Rotta per eliminare un post tramite ID
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = router; // Esporta il router per poterlo usare in app.js
