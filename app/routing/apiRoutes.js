module.exports = function(app) {

// Users (DATA)
// =============================================================
var cherubs = [];

// Create New Characters - takes in JSON input
app.post("/api/cherubs", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCherub = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCherub.name.replace(/\s+/g, "").toLowerCase();
  
    res.json(newCherub);
  });

// Displays all characters
app.get("/api/cherubs", function(req, res) {
  return res.json(cherubs);
});  

}