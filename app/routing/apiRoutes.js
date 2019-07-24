var cherubs = require("../data/cherubs");

module.exports = function(app) {
  // Displays information on the cherub with the lowest difference
  app.get("/api/cherubs", function(req, res) {
    return res.json(evaluate);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/cherubs", function(req, res) {
    var bestMatch = {};

    function evaluate(newCherub) {
      bestMatch = {
        name: "",
        picture: "",
        message: "",
        difference: 100
      };

      for (let i = 0; i < cherubs.length; i++) {
        var difference = 0;

        for (let j = 0; j < newCherub.scores.length; j++) {
          difference += Math.abs(newCherub.scores[j] - cherubs[i].scores[j]);

          if (j === newCherub.scores.length - 1) {
            if (bestMatch.difference > difference) {
              bestMatch.difference = difference;
              bestMatch.name = cherubs[i].name;
              bestMatch.picture = cherubs[i].picture;
              bestMatch.message = cherubs[i].message;
            }
          }
        }
      }
      console.log("Best match: ", bestMatch);
      return bestMatch;
    }

    var newCherub = req.body;

    console.log("New cherub: ", newCherub);
    evaluate(newCherub);

    cherubs.push(newCherub);

    res.json(bestMatch);

  });
};
