const express= require('express');
const ejs = require('ejs'); 
const yahooStockAPI  = require('yahoo-stock-api');

const server = express();
server.set('view-engine', ejs);
const PORT = 4000;

server.get('/stock', (req, res) => {
    res.render('stock.ejs');
});

server.get('/stockprice', (req, res) => {
    yahooStockAPI.getSymbol(req.query.stock).then((data) => {
        console.log(data)
        res.render('stockprice.ejs', {stock: req.query.stock, price: (data.response.previousClose)})
    })
})

server.listen(PORT, () => console.log('server is running'));