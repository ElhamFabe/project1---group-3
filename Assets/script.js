$(document).ready(function () {
    $("#find-game").on("click", function (event) {
        event.preventDefault();

        var game = $("game-input").val ();
        var queryURL = "https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D"
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": queryURL,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "459bb2a183mshc0681ca6ce8d05cp17f108jsnec2b6aceda17"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});