const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


//middleware

app.use(cors());


app.get('/', (req, res) => {
    res.send('Bistro Boss is Running!')
})

app.listen(port, () => {
    console.log(`Bistro Boss is Running in ${port}`)
})