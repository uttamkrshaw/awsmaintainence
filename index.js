const express = require("express")
const app = express();
const cors = require('cors')
const path = require('path');

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(4500,()=>{
    console.log("Server is Up & Running in Port 4500");
})