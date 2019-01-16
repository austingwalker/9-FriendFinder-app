var friendsData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
        res.json(friendsData);
});

app.post("/api/friends", function(req, res) {

    var bestMatch = {
        name: "",
        friendDifference: Infinity
      };

      var totalDifference;

    
    var newScores = req.body.scores;
    var name = req.body.name;

    

    console.log(newScores);

    var scores = [];

    for (var i = 0; i < newScores.length; i++){
        scores.push(parseInt(newScores[i]));
      };
  
        console.log(scores)

        var objectData = {name, scores}

        
        

        for(var i = 0; i < friendsData.length; i++){
             var currentFriend = friendsData[i];
             totalDifference = 0;

             console.log("-----");
             console.log(currentFriend.name);
             console.log("-----");

             for(var j = 0; j < currentFriend.scores.length; j++){
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = scores[j]


                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

            }

            if (totalDifference <= bestMatch.friendDifference){

                bestMatch.name = currentFriend.name;
                bestMatch.friendDifference = totalDifference;
            }

        }
        console.log("-----");
        console.log(bestMatch);
        console.log("-----");

        

        friendsData.push(objectData);


        res.json(bestMatch);
    
});
    

}

