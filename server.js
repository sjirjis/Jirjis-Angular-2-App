const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));

app.listen(PORT, function() {
    console.log("App is running on port " + PORT);
});

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname + '/src/index.html'));
});

