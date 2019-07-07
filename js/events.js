//define functions here

var getIt = () => {
  $('p').on('click', function() {
    alert("Hey!")
    return
  })
}

var frameIt = () => {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}



$(document).ready(function(){

// call functions here

});
