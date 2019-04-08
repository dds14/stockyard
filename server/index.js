const express = require("express"); // this is requiring express
const app = express(); // this is invoking express

const controller = require("./controllers/controller");
const { addToFavorites, readFavorites, removeFavorites, addToNotes, readNotes } = require("./controllers/controller")

app.use(express.json()); // this is middleware

// READ (FAVORITES)
app.get("/api/favorites", controller.readFavorites);

// READ (NOTES)
app.post("/api/notes", readNotes)

// CREATE (NOTES)
app.post("/api/notes", addToNotes);

// CREATE (FAVORITES)
app.post("/api/favorites", addToFavorites);


// UPDATE


// DELETE
app.delete("/api/favorites/:name", removeFavorites)

const PORT = 4041;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
