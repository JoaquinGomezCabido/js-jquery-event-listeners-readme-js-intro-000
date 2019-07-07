//define functions here

var getIt = () => {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

var frameIt = () => {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

var pressIt = () => {
  $('input').on('keydown', function(key) {
    if(key.which == 103 || key.which == 71) {
      alert("G was pressed!")
    }
  })
}

var submitIt = () => {
  $('form').on('submit', function() {
    alert("Your form is going to be submited now.")
  })
}

$(document).ready(function(){

// call functions here

});
