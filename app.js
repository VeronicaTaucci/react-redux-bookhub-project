const express = require('express')
const app = express();
let port = 3001;

app.use(require('./routes/authentication'))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})