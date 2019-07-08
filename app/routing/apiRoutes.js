module.exports = function(app) {

// Users (DATA)
// =============================================================
var cherubs = [];
var path = require("path");

// Create New Characters - takes in JSON input
app.post("/api/cherubs", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCherub = req.body;
    let bestFriend = {
      score: 1000000,
      index: 0
    };
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  for (let i = 0; i < cherubs.length; i++) {
    const element = cherubs[i];
    let diff = 0;

      for (let j = 0; j < req.body.scores.length; j++) {
        diff = diff + Math.abs(parseInt(element.scores[j]) - parseInt(req.body.scores[j]))
        
      }
      console.log(diff,bestFriend.score);
      if(diff<bestFriend.score){
        diff = bestFriend.score
        bestFriend.index = i;
      }
  }

    cherubs.push(newCherub);
    res.json(cherubs[bestFriend.index]);
  });

// Displays all characters
app.get("/api/cherubs", function(req, res) {
  return res.json(cherubs);
});  

}