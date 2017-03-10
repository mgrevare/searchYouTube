$(function(){
var youTubeURL = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromAPI(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyBFA_KB4gsemuXVv32B75TmRl0u59jxfcY',
    q: searchTerm
  };
  $.getJSON(youTubeURL, query, callback)
};

function displaySearch(data) {
  var resultElement = '';
  console.log(data)
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<li><img src="' + item.snippet.thumbnails.default.url + '">' +
      '<p>' + item.snippet.description + '</p>'
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }

  $('.results').html(resultElement);
}

$('.youtube-search-form').submit(function(e){
  e.preventDefault();
  var query = $('.js-query').val();
  getDataFromAPI(query, displaySearch);
})

});
