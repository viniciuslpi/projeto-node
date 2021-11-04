const port          = 3003;
const database      = require('./database');
const express       = require('express');
const bodyParser    = require('body-parser')
const app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos()); // convert to JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id));
})

app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = database.excluirProduto(req.params.id)
    res.send(produto); // JSON
})


app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
})

