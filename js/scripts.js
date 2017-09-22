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
    var input= $("input#userInput").val();

    if (input.length === 1) {
      var dog = oneFunction(input);
      $("#output").show();
      $("#output1").text(dog);
    }

    if (input.length === 2) {
      var cat = tenFunction(input);
      $("#output").show();
      $("#output1").text(cat);
    }

    if (input.length === 3) {
      var fish = hundredFunction(input);
      $("#output").show();
      $("#output1").text(fish);
    }

    if (input.length === 4 && input <= 4999) {
      var horse = thousandFunction(input);
      $("#output").show();
      $("#output1").text(horse);

    } else if (input > 4999) {
      alert("Roman numerals end at 4,999. Please enter a lower number.");
    }

    event.preventDefault();
  });
});
