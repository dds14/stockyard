// change this, using template from node-day-2-mini
// check out node-day-2-afternoon, it has the best info
// node-day-2 is alright



let books = [];

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    }
}
