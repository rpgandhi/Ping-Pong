// $(document).ready(function() {
//
//   $("#formOne").submit(function(event) {
//     alert("working");
//     var input = $("input#userInput").val();
//     alert("working");
//
//     for (var i = 0; i <= input; i++) {
//       if (input % 3) {
//         alert("working");
//         $("#output").show();
//         // $("#output1").text("ping");
//       } else if (input !% 3) {
//         $("#output").show(i);
//         // $("#output1").text(i);
//       }
//     }
//
//
//
//
//   event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#pingForm").submit(function(event){
    alert("working");
    var input= $parseInt(("input#numberInput").val());
    resultsArray = []
    // if (input === 3){
    //   alert("if working");
    // }

    for (var i = 1; i < input.length; i ++) {
      alert("for loop working");
      if ((i % 3)===0) {
        resultsArray.push("ping");
      } else if ((i % 5)===0) {
        resultsArray.push("pong");
      } else if ((i % 15)===0); {
        resultsArray.push("ping-pong");
      // } else {
      //   result.Array.push(i);
      // }
    }
  }
      $("output").text(resultsArray);
      //       if ((input % 3) === 0) {
      //         alert("working");
      //         $("#output").show();
      //         $("#output1").show();
      //       } else if (input !% 3) {
      //         $("#output").show(i);
      //         // $("#output1").text(i);
      //       }
      //
      // alert("for working");


    // event.preventDefault();

  });

});
