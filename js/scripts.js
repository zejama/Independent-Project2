$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("#question2").val();
    const q3 = $("#question3").val();
    const q4 = $("#question4").val();
    const q5 = $("#question5").val();
  
    if (q1 === "Yes" & q3 === "5" & q4 === "9") {
      $('.suggestion1').show();
    } else if (q1 === "Yes") {
      $('.suggestion1').hide();
      $('.error').show();
    } else if (q3 === "5") {
      $('.suggestion1').hide();
      $('.error').show();
    } else if (q4 === "9") {
      $('.suggestion1').hide();
      $('.error').show();
    } else if (q1 === "No" & q2 === "3" & q4 === "7") { 
      $('.suggestion2').show();
    } else if (q1 === "No") {
      $('.suggestion2').hide();
      $('.error').show();
    } else if (q2 === "3") {
      $('.suggestion2').hide();
      $('.error').show();
    } else if (q4 === "7") {
      $('.suggestion2').hide();
      $('.error').show();
    } else if (q1 === "Neither" & q2 === "1" & q4 === "8") {
      $('.suggestion3').show();
    } else if (q1 === "Neither"){
      $('.suggestion3').hide();
      $('.error').show();
    } else if (q2 === "1") {
      $('.suggestion3').hide();
      $('.error').show();
    } else if (q4 === "8") {
      $('.suggestion3').hide();
      $('.error').show();
    } else {
      $('.error').show();
    }
    
    
    


    // if (q1, q2, q3, q4, q5 === "No", "1", "4", "7", "10") {
   // $('.suggestion1').show();
  // } else if (q1, q2, q3, q4, q5 === "Yes", "2", "5", "8", "11") {
    // $('.suggestion1').hide();
    // $('.suggestion2').show();
  // } else if (q1, q2, q3, q4, q5 === "Neither", "3", "6", "9", "12") { 
    // $('.suggestion2').hide();
    // } else {
    // $('.suggestion3').show();
  // }
});
});