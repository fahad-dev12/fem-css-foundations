var results =''
var buffer =''
var operator = 0


// output result and if start with zero or undifined show nothing as result 
function output()
{
if (results === '0' || results == undefined){results = ''}// start with zero then no show zero

document.getElementById("output-field").innerHTML = results // output result 

}


// declaring the operations 
document.getElementById("adding")       .addEventListener("click", function()   {operation(1)})
document.getElementById("subtract")     .addEventListener("click", function()   {operation(2)})
document.getElementById("multiply")     .addEventListener("click", function()   {operation(3)})
document.getElementById("devide")       .addEventListener("click", function()   {operation(4)})
document.getElementById("equal-button") .addEventListener("click", function()   {equalFunc()})


//declring numbers 
document.getElementById("number0").addEventListener("click",function(){results += '0' ;output()})
document.getElementById("number1").addEventListener("click",function(){results += '1' ;output()})
document.getElementById("number2").addEventListener("click",function(){results += '2' ;output()})
document.getElementById("number3").addEventListener("click",function(){results += '3' ;output()})
document.getElementById("number4").addEventListener("click",function(){results += '4' ;output()})
document.getElementById("number5").addEventListener("click",function(){results += '5' ;output()})
document.getElementById("number6").addEventListener("click",function(){results += '6' ;output()})
document.getElementById("number7").addEventListener("click",function(){results += '7' ;output()})
document.getElementById("number8").addEventListener("click",function(){results += '8' ;output()})
document.getElementById("number9").addEventListener("click",function(){results += '9' ;output()})


//declaring clear and backspace 
document.getElementById("clear-button").addEventListener("click", function(){clearAll() ; output() })
document.getElementById("backspace").addEventListener("click" , function(){results = results.slice(0,-1);output()})



 function operation(number) // saving operator number and updating the buffer
{
     operator = number // saving operation number in operator 

     
     
     if (buffer == '') // if user only input one number
     { buffer = results ; results = '' } 
     
     
     else 
     {  // else means user input more than two numbers 
     buffer = calculate() ; results = '' // update buffer and empty the result 
     }

     // output the results 
     output()    
}

function clearAll() // when chosing clear => clear everything and show result again 
{
     results = ""
     buffer = "" 
     operator = 0 

     // show result
     output()
     console.log("clear all has been submitted")
}


function equalFunc() // when choosing = operator 
{
     // update the results variable value 
     results = calculate() 

     // show result
     output()
}

function calculate() // return the output after the operations 
{
     buffer = +buffer ; results = +results // change from string to int 

     // return based on operation 
     if (operator == 1){return buffer + results } 
     if (operator == 2){return buffer - results }
     if (operator == 3){return buffer * results }
     if (operator == 4){return buffer / results }   
}

