module.exports = function(app) {

// Users (DATA)
// =============================================================
var cherubs = [];
var path = require("path");

// Create New Characters - takes in JSON input
app.post("/api/cherubs", function(req, res) {
    // holds the data from the request, and sets default values for the score and index we are comparing the first user data to
    var newCherub = req.body;
    let bestFriend = {
      score: 1000000,
      index: 0
    };
    
  //loops through all the data submitted and compares their scores, setting a default difference of zero
  for (let i = 0; i < cherubs.length; i++) {
    const element = cherubs[i];
    let diff = 0;

      //calculates the differences between the newest user data and the previous ones using absolute values
      for (let j = 0; j < req.body.scores.length; j++) {
        diff = diff + Math.abs(parseInt(element.scores[j]) - parseInt(req.body.scores[j]))
        
      }

      //if the difference is the lowest one, it grabs the user data with the lowest score
      console.log(diff,bestFriend.score);
      if(diff<bestFriend.score){
        diff = bestFriend.score
        bestFriend.index = i;
      }
  }
    
    //grabs the cherub with the lowest difference and sticks their data into the cherubs array
    cherubs.push(newCherub);
    res.json(cherubs[bestFriend.index]);
  });

// Displays information on the cherub with the lowest difference
app.get("/api/cherubs", function(req, res) {
  return res.json(cherubs);
});  

}