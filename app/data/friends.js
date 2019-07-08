var path = require("path");

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
        var totalDifference = newCherub.name[i]

      };

    // Question: What does this code do??
    $.post("/api/characters", newCherub)
      .then(function(data) {
        console.log("add.html", data);
      });
  });