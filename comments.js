// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Read comments.json
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create route to get comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Create route to post comments
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

// Listen on port 3000
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});