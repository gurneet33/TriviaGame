var correct = 0;
var animating;
var operand = 0;
var useruserAnswer;
var correctAnswer;
var time = 20;
var qClass;
$newDiv = $('<div>');

$(function() {

    //to generate correct answer in every form
function coorectGen(){
    if(operand==0){
        correctAnswer = "Ottawa";
    }
    else if(operand==1){
        correctAnswer = "Delhi";
    }
    else if(operand==2){
        correctAnswer = "Washington DC";
    }
    else {
        correctAnswer = "Paris";
    }
}

    // for the timer
function decrement(){
    time--;
    $("#timer").html(time);
    if(time<=0){
        alert("end game");
        clearInterval(setTime);
    }
}
    // to input values when the user clicks on the radio button
$("input[type='radio']").on("click", function(e){
    userAnswer = $(this).attr("value"); 
    console.log("user answer is:"+ userAnswer); 
    qClass = $(this).attr("class");
    console.log("useranswer class is :"+ qClass);
    coorectGen();
    console.log("correct answer is "+correctAnswer);

})

    //when start Game is pressed
$("ul").on("click", function(){
    setTime= setInterval(decrement,1000);
        $(".q1field").css("display", "block");
});

    //when submit button is clicked
$(".btn").on("click", function(){
    console.log(userAnswer);
    $("body").append($newDiv);   
        if(qClass==="tag"){
            console.log("correct");
            correct++;
            console.log(correct);
            $newDiv.html('<b>' + "Correct answer" + '</b>');
            }
	    else
		{
			$newDiv.html(userAnswer + " Is Wrong answer " +"<br/>Correct answer is:<br>"+ correctAnswer);
        }
});

    //when next is pressed
$(".next").on("click", function(){
    $newDiv.html(" ");
    operand++;
    console.log(operand);
    console.log("clicked");
    if(operand===1){
        $(".q1field").css("display", "none");
        $(".q2field").css("display", "block"); 

        $(".q1field").removeClass("active");
        $(".q2field").addClass("active");
         }
    else if(operand===2){
        $(".q1field").css("display", "none");
        $(".q2field").css("display", "none"); 
        $(".q3field").css("display", "block");
    }    
    else if(operand===3){
        $(".q1field").css("display", "none");
        $(".q2field").css("display", "none"); 
        $(".q3field").css("display", "none");
        $(".q4field").css("display", "block");
    }     
  
    
});

});