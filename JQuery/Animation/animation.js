$(function(){
    $("#side").animate(
        {left:200,opacity:0.5},
        500,
        function(){
         $(this).css({width:"200px",fontSize:"2em"});   
        }
    );
})