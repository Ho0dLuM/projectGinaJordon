$(document).ready(function() {
  console.log('sanity check');
});

$('form').on('sumbit', function(e) {
      e.preventDefault();
});


$(function() {
  $.ajax ({
    url: 'http://www.omdbapi.com/',
    method: 'GET'
  }).done(function(title, genre) {
    var title =  $('')
    var movieData =
  })
});




//
//
// $(function() {
//       $.ajax({
//         url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
//         method: 'GET'
//
//       }).done(function(data) {
//         var role = data;
//         console.log(data);
//         console.log(data[0].img);
//         console.log(data[0].title);
//
//       for (var i = 0; i < data.length; i++) {
//         var profiletitle = data[i].title.toLowerCase();
//         $('.form-control').append('<option class="role">' + profiletitle + '</option>');
//       }
//     })
//   });
// });
