$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input= $("input#numberInput").val();
    var resultsArray= [""]

    for (var i = 1; i <= input; i ++) {

      if ((i % 15)===0) {
        resultsArray.push("ping-pong");
      } else if ((i % 5)===0) {
        resultsArray.push("pong");
      } else if ((i % 3)===0) {
        resultsArray.push("ping");
      } else {
        resultsArray.push(i);
      }
    }

    for(var i = 1; i < resultsArray.length; i++) {
      $("#output").append('<li>' + resultsArray[i] + '</li>');
    }

  });
});
