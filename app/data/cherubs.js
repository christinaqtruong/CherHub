var path = require("path");

module.exports = function(app) {
// Submit user data
$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    var newCherub = {
      "name": $("#username").val().trim(),
      "picture": $("#profile-picture").val().trim(),
      "scores": [
          //grab user score using if statement? or value? how to check if the user selected that value and then grab it
      ]
    }

      for(var i=0; i < newCherub.scores.length; i++){
        var scores = [];
        scores.push(newCherub.scores[i])
        var difference = function (a, b) { return Math.abs(a - b); }
        difference(scores[i],)
      };

    // Question: What does this code do??
    $.post("/api/characters", newCherub)
      .then(function(data) {
        console.log("add.html", data);
      });
  });
}