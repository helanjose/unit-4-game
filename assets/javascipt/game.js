
var random_num;
var result=0;
var stone1,stone2,stone3,stone4;
win=0;
loss=0;
$(document).ready(function(){
 
    function generate_random()
    {

        random_num=Math.floor(Math.random() * 103) + 18;
        $("#random_no").text(random_num);
        console.log("randomnum:"+random_num);
        $("#win_loss").html("win:"+win+"<br>"+"loss:"+loss);
    }


function random_crystals(){


        

        stone1=Math.floor(Math.random() * 12) + 1;
        
        stone2=  Math.floor(Math.random() * 12) + 1;
        
        stone3= Math.floor(Math.random() * 12) + 1;
        
        stone4= Math.floor(Math.random() * 12) + 1;
        
        result=0;

    

        
            
}

generate_random();
random_crystals();


 $("#colcrystals1").on("click", function(){
        result=result+stone1;
        console.log("res"+result);
        $("#result").text(result);
        
        check(random_num,result);



});

         


$("#colcrystals2").on("click", function(){
    result=result+stone2;
    console.log("res"+result);
    $("#result").text(result);
    check(random_num,result);
   


});
$("#colcrystals3").on("click", function(){
    result=result+stone3;
    console.log("res"+result);
    $("#result").text(result);
   
    check(random_num,result);

});
$("#colcrystals4").on("click", function(){
    result=result+stone4;
    console.log("res"+result);
    $("#result").text(result);
    check(random_num,result);



});
function check(x,y)
{
    
$("#result").text(result);
if(x==y)
{   
    
    win+=1;
    console.log("win:"+win);
    $("#win_loss").html("win:"+win+"<br>"+"loss:"+loss);
    generate_random();
    random_crystals();
}
else{ 
    if(x<y){
        
        loss+=1;
        console.log("loss:"+loss);
        
      
        $("#win_loss").html("win:"+win+"<br>"+"loss:"+loss);

        generate_random();
        random_crystals();
    }

}
}



});








