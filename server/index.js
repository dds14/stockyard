const express = require('express');

const app = express();

app.use(express.json()); // this is middleware

app.get("api/changethis", bc.read) // change the bc. part
app.post("api/changethis", bc.create) // change the bc. part

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})