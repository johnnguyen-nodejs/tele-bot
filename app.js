const express = require("express");
const app = express();
const http = require('http').createServer(app)
const Telegraf = require('telegraf')
const bots = new Telegraf('1122892813:AAEG6MnbjCuM5adsrocpsudFCF8j0pXOK9I')

bots.start((ctx) => {
    ctx.reply('Hello')
})


const port = process.env.PORT || 3000;

http.listen(port,()=>{
    console.log(`Listening on HTTP Port: ${port}`);
})
bots.launch()