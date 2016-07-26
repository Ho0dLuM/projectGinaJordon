$(document).ready(function() {
  console.log('sanity check');
});

$('form').on('sumbit', function(e) {
      e.preventDefault();
      var title = ($('#movieSearch').val());
});


$(function() {
        $.ajax ({
          url: 'http://www.omdbapi.com/?t=Frozen',
          //url: add the user'input to the URL
          method: 'GET'

          }).done(function(data) {
            //list of movie data
            console.log(data);

            //access the movie title
            console.log(data.Title);
            var movieTitle= data.Title;

            //access the movie genre
            console.log(data.Genre);
            var movieGenre = data.Genre;
          //Seperate each movie genre into seperate pieces

            console.log(data.Poster);
            var moviePoster = data.Poster


            //Add poster to DOM
            ('#moviePoster').html('<img src=" + moviePoster + "">');

            //Update DOM so title is below poster
            ('#moveTitle').html('<p>' + movieTitle + '</p>');


            //When the movie is selected the drop down genre list up-dates
            //when you click on a certain genre, it highlights the movies in list
            // ** dom manipulation ** //

            ('#movieGenre').append('<option class="role">' + genreList +  '</option>');

          })
});
