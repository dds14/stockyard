const express = require("express"); // this is requiring express - think of require as importing
const app = express(); // this is invoking express

// this part is used so you don't have to put controller. before every endpoint (i.e. app/get("api/favorites", readFavorites))
const {
  addToFavorites,
  readFavorites,
  removeFavorites,
  addToNotes,
  readNotes,
  updateNotes
} = require("./controllers/controller");

app.use(express.json()); // this is middleware

// READ (FAVORITES)
app.get("/api/favorites", readFavorites);
// the get function takes in two arguments (1) the url (/api/favorites)
// and (2) the function that tells express what to send back to
// the person making the request (readFavorites)

// READ (NOTES)
app.get("/api/notes", readNotes);

// CREATE (FAVORITES)
app.post("/api/favorites", addToFavorites);

// CREATE (NOTES)
app.post("/api/notes", addToNotes);

// UPDATE
app.put("/api/notes/:id", updateNotes);

// DELETE
app.delete("/api/favorites/:name", removeFavorites);

// setting the port number and telling the server to listen for it
// it binds the app to the port that we specify
const PORT = 4041;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
