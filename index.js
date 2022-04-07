// S2 Create Nodejs Server and connect to database

const http = require("http"); // S2
const app = require("./app"); // S2
const server = http.createServer(app); // S2

const { API_PORT } = process.env; // S2
const port = process.env.PORT || API_PORT; //S2

server.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
