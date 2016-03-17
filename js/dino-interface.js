
$(document).ready(function(){
  $('#dinos').submit(function(event){
    event.preventDefault();

    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    var allDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words),
    fillcontainer = function(html) {
      $('#putDino').html(html);
    },
     error = function() {
      console.log("no dinos. sorry.");
    };
    allDinos.then(fillcontainer, error);
    });
  });
