const express = require('express');
const path = require('path');
const app = express();
// const port = 3001; // You can change this port if needed
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser')

app.use(bodyParser.json())
function givepage(req,res){
  res.send(path.join(__dirname, '/index.html'));
}


app.get('/',givepage)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 


