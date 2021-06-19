$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("#question2").val();
    const q3 = $("#question3").val();
    const q4 = $("#question4").val();
    const q5 = $("#question5").val();
  
  if (q1, q2, q3, q4, q5 === "Yes", "2", "6", "8", "9", "11") {
    $('.suggestion1').show();
  } else {
    $('.error').show();
  }
});
});