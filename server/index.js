const express = require("express"); // this is requiring express

const controller = require("./controllers/controller");

const app = express(); // this is invoking express

app.use(express.json()); // this is middleware

// you could write the endpoints and stuff in here but you move it to a controller to organize the code

// READ
app.post("/api/favorites", controller.addToFavorites);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
