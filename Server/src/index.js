// const http = require("http");
// const { getCharById } = require("./controllers/getCharById")

// http.createServer((req , res) => {
    
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")) {
//         const id = req.url.split("/").at(-1);
//         getCharById(res , +id);  //id a number
//     }

// }).listen(3001)

const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({force: true});

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});
