
// function check(){
//     answer1 = 

$('#button').click(function() {
    var userAnswer1 = $('input[name=question1]:checked').attr('value'); 
    if(userAnswer1==="Ottawa"){
    $('div').html('<b>' + "Correct answer" + '</b>');
    }

    else
    {
        $('div').html(userAnswer1 + " Is Wrong answer " +"<br/>Correct answer is:<br> <b>Ottawa</b>");
    }
})
