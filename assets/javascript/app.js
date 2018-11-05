var correct = 0;
var lost = 0;
var animating;
var operand = 0;
var useruserAnswer;
var correctAnswer;
var time = 31;
var qClass;
$newDiv = $('<div>', { 'class': 'displayDiv' })

$(function() {
	$("*").dblclick(function(e){
		
			e.preventDefault();
		
		  });
    //to generate correct answer in every form
function correctGen(){
    if(operand==0){
        correctAnswer = "Milky Way";
    }
    else if(operand==1){
        correctAnswer = "Jupiter";
    }
    else if(operand==2){
        correctAnswer = "Gravity";
    }
    else {
        correctAnswer = "Venus";
    }
}

    // for the timer
function decrement(){
    time--;
    $("#timer").html(":"+time);
    if(time<=0){
		clearInterval(setTime);
		$("form").css("display","none");
		$newDiv.css("display","block");
		$newDiv.html("Game Over"+"<br> Your Score is<br>"+correct);
		setTimeout(reset, 2000);
    }
}
    // to input values when the user clicks on the radio button
$("input[type='radio']").on("click", function(e){
    userAnswer = $(this).attr("value"); 
    console.log("user answer is:"+ userAnswer); 
    qClass = $(this).attr("class");
    console.log("useranswer class is :"+ qClass);
    correctGen();
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
$(".submitBtn").one("click", function(){
	setTimeout(nextForm, 2100);
	$newDiv.css("display","block");
    console.log(userAnswer);
    $("body").append($newDiv);   
        if(qClass==="tag"){
            console.log("correct");
            correct++;
            console.log(correct);
			$newDiv.html('<b>' + "Correct answer" + '</b>');
			$(".victory").css({"width":(correct*20), "display":"block" }) 
			$(".victory").html("<h3>"+correct+"<br>R"+"</h3>")	
            }
	    else{
			lost++;
			$newDiv.html("<b>"+userAnswer+"</b>" + " is Wrong answer Correct answer is: <br>"+"<b>"+correctAnswer+"</b>");
			$(".loss").css({"width":(lost*20), "display":"block" }) 
			$(".loss").html("<h3>"+lost+"<br>W"+"</h3>")
		}
});

	//To move to next question
	function nextForm(){
    $newDiv.css("display","none");
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
}
	// to start game over again
	function reset(){
		document.location.reload();
	}

});
