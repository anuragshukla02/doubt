const express = require('express');
const app = express();
const port = 3001; // You can change this port if needed
var bodyParser = require('body-parser')

app.use(bodyParser.json())
function givepage(req,res){
  res.send(__dirname+"index.html")
}


app.get('/',givepage)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 
