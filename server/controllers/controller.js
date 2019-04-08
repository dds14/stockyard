let favorites = [];

let notes = [];


// READ (FAVORITES)
const readFavorites = (req, res) => {
  res.status(200).json(favorites);
}

// READ (NOTES)
const readNotes = (req, res) => {
  res.status(200).json(notes);
}

// CREATE (NOTES)
const addToNotes = (req, res) => {
  req.body.id = notes.length + 1
  notes.push(
    req.body
  )

  res.status(200).json(notes)
}

// CREATE (FAVORITES)
const addToFavorites = (req, res) => {
  favorites.push({
    name: req.body.name,
    logo: req.body.logo,
    ticker: req.body.ticker
  });
  res.status(200).json(favorites);
};

// UPDATE
const updateNotes = (req, res) => {
  const index = notes.findIndex(note => {
    return note.id === +req.params.id
  })
  notes[index].note = req.body.newNote
  res.status(200).json(notes)
}

// DELETE
const removeFavorites = (req, res) => {
  let name = req.params.name;
  favorites.splice(name, 1);
  res.send(favorites);
}

module.exports = {
  addToFavorites,
  readFavorites,
  removeFavorites,
  addToNotes,
  readNotes,
  updateNotes
}
