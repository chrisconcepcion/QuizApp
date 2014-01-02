var questions = [{question: "What is the capital of the US", choices: ["Washington DC", "NYC", "Silicon Valley"], correct:0}, {question: "Question 2", choices: ["q2a", "q2b", "q2c"], correct:1}, {question: "Question3", choices: ["q3a", "q3b", "q3c"], correct:2}];
var currentQuestion = 0;
var score = 0;
$(document).ready(function(){
	  $(':submit').click(function(){
	  	var $radios = $('input:radio[name=answer]');
      if($radios.is(':checked')) {
	  	  event.preventDefault();
	  	  if (questions[currentQuestion].correct == parseInt($radios.filter(":checked").val())){
	  	  	score +=1;
	  	  }
	  	  if (questions.length == currentQuestion + 1 ) {
	  	  	$(".quiz").hide("slow");
	  	  	$("body").append("<h2>Your score is: " + score + ".</h2>");
	  	  } else {
	  	  	currentQuestion += 1;
	  	  	$('.quiz label').text(questions[currentQuestion].question);
	  		  $('.quiz span')[0].innerHTML=questions[currentQuestion].choices[0];
	  	 	  $('.quiz span')[1].innerHTML=questions[currentQuestion].choices[1];
	  	 	  $('.quiz span')[2].innerHTML=questions[currentQuestion].choices[2];
	  	 	}
	  	 } else {
	  	 	alert("You must select an answer.");
	  	 }
	  });
});
