var correct = 0;
var animating;
var operand = 0;
var userAnswer;
var time = 20;
var Answer;
var $select;

// function initialize(){
// 	userAnswer = $("input:checked").attr("value");
// 	console.log(userAnswer + " is checked");
// }
$(function() {
    console.log( "ready!" );


function decrement(){
    time--;
    $("#timer").html(time);
    if(time<=0){
        alert("end game");
        clearInterval(setTime);
    }
}
// function radioClicked(){
//     $("input:checked").attr("value");
//     console.log($(this))
// }
function radioClicked (){
$("input[type='radio']").on("click", function(){
    console.log($(this));
    Answer = $(this).attr("value"); 
    console.log(Answer);
     
    
})
}

$("ul").on("click", function(){
setTime= setInterval(decrement,1000);


});

$(".btn").on("click", function(){
    radioClicked();
    console.log(Answer);
    // initialize();
    // if($("input:checked").hasClass("tag")){
	// 	console.log("right");
	// 	correct++;
	// 	console.log(correct);
	// 	$("#after_submit").html('<b>' + "Correct answer" + '</b>');
	// 	}
	
	// 	else
	// 	{
	// 		$('#after_submit').html(userAnswer + " Is Wrong answer " +"<br/>Correct answer is:<br> <b>Ottawa</b>");
	// 	}
	// 	event.stopImmediatePropagation;
    //     initialize();
        
        
});
$(".next").on("click", function(){
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