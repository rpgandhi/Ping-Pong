$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    alert("working");
    var input= $("input#numberInput").val();
    var resultsArray= [""]

    for (var i = 1; i <= input; i ++) {
      alert("for loop working");

      if ((i % 3)===0) {
        resultsArray.push("ping");
        alert("3working");
      } else if ((i % 5)===0) {
        resultsArray.push("pong");
        alert("5 working");
      } else if ((i % 15)===0) {
        resultsArray.push("ping-pong");
        alert("15 working");
      } else {
        resultsArray.push(i);
        alert("end else working");
      }
    }

    $("output").text(resultsArray.join(" "));


  });
});
