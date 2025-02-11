const express = require('express');
const app = express();
const port = 3000;

// Permette di leggere la cartella public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// 
app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                      Cracker di farro
                      Cracker di lupini
                      Cracker allo zafferano
                      Cracker ai semi`,
            image:"img/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        },
        {
            title: "Ciambellone soffice",
            content: `Il ciambellone soffice è un dolce classico della tradizione, perfetto per la colazione o la merenda. Preparato con ingredienti semplici e genuini, conquista con la sua consistenza morbida e il suo profumo invitante. Ideale da inzuppare nel latte o da gustare con una spolverata di zucchero a velo, può essere personalizzato con aromi e aggiunte golose. Provate le nostre varianti per rendere ogni fetta ancora più speciale:
                        Ciambellone al limone
                        Ciambellone al cacao
                        Ciambellone marmorizzato
                        Ciambellone allo yogurt`,
            image: "img/ciambellone.jpeg",
            tags: ["Dolci", "Colazione", "Ricette tradizionali"]
        },
        {
            title: "Pane fritto dolce",
            content: `Il pane fritto dolce è una ricetta semplice e golosa, perfetta per riciclare il pane avanzato e trasformarlo in una merenda irresistibile. Croccante all’esterno e morbido all’interno, viene arricchito con zucchero e cannella per un sapore avvolgente. Ideale da servire caldo, è perfetto per accompagnare una tazza di tè o cioccolata calda. Scoprite le nostre varianti per renderlo ancora più speciale: 
                        Pane fritto al miele 
                        Pane fritto con crema pasticcera 
                        Pane fritto al cacao 
                        Pane fritto con frutta`,
            image: "img/pane_fritto_dolce.jpeg",
            tags: ["Dolci", "Merenda", "Ricette tradizionali"]
        },
        {
            title: "Pasta alla barbabietola",
            content: `La pasta alla barbabietola è un primo piatto colorato e dal sapore delicato, perfetto per portare in tavola un tocco di originalità. Grazie alla barbabietola, la pasta assume un caratteristico colore vivace e un gusto leggermente dolce, che si abbina perfettamente con formaggi cremosi o croccanti granella di frutta secca. Una ricetta ideale per stupire i vostri ospiti con semplicità e creatività. Provate le nostre varianti per nuovi abbinamenti gustosi: 
                        Pasta alla barbabietola e ricotta
                        Pasta alla barbabietola e noci
                        Pasta alla barbabietola e gorgonzola
                        Pasta alla barbabietola e yogurt greco`,
            image: "img/pasta_barbabietola.jpeg",
            tags: ["Primi piatti", "Ricette vegetariane", "Colorate e creative"]
        },
        {
            title: "Torta paesana",
            content: `La torta paesana è un dolce della tradizione lombarda, preparato con ingredienti semplici e genuini. Conosciuta anche come ‘torta di pane’, nasce come ricetta di recupero per trasformare il pane raffermo in un dessert goloso e ricco di sapore. Il cacao, il latte e l’uvetta donano a questa torta una consistenza umida e irresistibile, perfetta per la colazione o la merenda. Provate le nostre varianti per un tocco di gusto in più:
                        Torta paesana con amaretti
                        Torta paesana con gocce di cioccolato 
                        Torta paesana con frutta secca 
                        Torta paesana senza lattosio`,
            image: "img/torta_paesana.jpeg",
            tags: ["Dolci", "Ricette tradizionali", "Riciclo in cucina"]
        }
    ];

    res.json(posts) // 
})

// serve per avviare il server 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})