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
  return
}

var pressIt = () => {
  $('input').on('keydown', function(key) {
    if(key.key == "g") {
      alert("G was pressed!")
    }
    return
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
