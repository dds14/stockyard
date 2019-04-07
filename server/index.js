const express = require("express"); // this is requiring express
const app = express(); // this is invoking express

const controller = require("./controllers/controller");

app.use(express.json()); // this is middleware


// READ
app.post("/api/favorites", controller.addToFavorites);


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
