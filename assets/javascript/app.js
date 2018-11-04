var correct = 0;
var animating;
var operand = 0;
var useruserAnswer;
var correctAnswer;
var time = 20;
var qClass;
$newDiv = $('<div>', { 'class': 'displayDiv' })

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
		clearInterval(setTime);
		$("form").css("display","none");
		$newDiv.html("Game Over"+"<br> Your Score is<br>"+correct);
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
$(".start").on("click", function(){
    setTime= setInterval(decrement,1000);
		$(".q1field").css("display", "block");
		$("#firstQ").addClass("onQuestion");
		$("#progressbar").css("display", "block");
		$(".start").css("display", "none");
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
			$(".victory").css({"width":(correct*20), "display":"block" }) 
			
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
		$("#firstQ").removeClass("onQuestion");
        $("#secondQ").addClass("onQuestion");
         }
    else if(operand===2){
        $(".q1field").css("display", "none");
        $(".q2field").css("display", "none"); 
		$(".q3field").css("display", "block");
		
		$(".q2field").removeClass("active");
		$(".q3field").addClass("active");
		$("#secondQ").removeClass("onQuestion");
        $("#thirdQ").addClass("onQuestion");
    }    
    else if(operand===3){
        $(".q1field").css("display", "none");
        $(".q2field").css("display", "none"); 
        $(".q3field").css("display", "none");
		$(".q4field").css("display", "block");
		
		$(".q3field").removeClass("active");
		$(".q4field").addClass("active");
		$("#thirdQ").removeClass("onQuestion");
        $("#fourthQ").addClass("onQuestion");
    }     
  
    
});

});