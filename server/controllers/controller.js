// change this, using template from node-day-2-mini
// check out node-day-2-afternoon, it has the best info
// node-day-2 is alright

let favorites = [];

module.exports = {
  addToFavorites: (req, res) => {
    console.log(favorites);
    favorites.push(req.body.name, req.body.logo, req.body.ticker);
    res.status(200).json(favorites);
  }
};
