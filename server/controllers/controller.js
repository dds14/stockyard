let favorites = [];

// READ
const readFavorites = (req, res) => {
  res.status(200).json(favorites);
}

// CREATE
const addToFavorites = (req, res) => {
  favorites.push({
    name: req.body.name,
    logo: req.body.logo,
    ticker: req.body.ticker
  });
  res.status(200).json(favorites);
};



// DELETE
const removeFavorites = (req, res) => {
  let nameId = req.params.name;
  favorites.splice(name, 1);
  res.send(favorites);
}



module.exports = {
  addToFavorites,
  readFavorites,
  removeFavorites
}
