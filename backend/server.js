const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`SEVER IS RUNNING ON PORT ${port}`);
});
//YAHN MUJEH FIXED PORT 3000 USE NAHI KARNA
// MUJEH ENVIRONMENT VARIABLE SA PTA CHALNA CHAHIYE KA MEIN KON SA PORT USE KARON GA
