const express = require("express"); // this is requiring express
const app = express(); // this is invoking express

const controller = require("./controllers/controller");
const { addToFavorites } = require("./controllers/controller")

app.use(express.json()); // this is middleware

// READ
app.get("/api/favorites", controller.readFavorites);

// CREATE
app.post("/api/favorites", addToFavorites);

// UPDATE


const PORT = 4041;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
