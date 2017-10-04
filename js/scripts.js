var resultsArray= [];

function backEnd(input) {

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
  };
  return resultsArray;
};

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input= parseInt($("input#numberInput").val());
    var backEndReturn  = backEnd(input);

    backEndReturn.forEach(function(number) {
      $("#output").append('<li>' + number + '</li>');
    });
  });
});
