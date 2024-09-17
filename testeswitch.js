const prompt = require ("prompt-sync")()
let expr = prompt("enter a fruit: ")
switch (expr) 
{
 case 'oranges':
 console.log ( 'oranges are $0.59 a pond. ');
 break;
 case 'mangoes':
    case 'papyas':      
    console.log ('mangoes and papayas are $2.79 a pond. ');
    // expected output: "mangoes and papayas are $2.79 a pound. "
    break;
   case 'bergamota':
    console.log ("bergamota custa 2")
    break; 
    case " banana":
console.log ('a banana custa 3')
break;
default:
    
console.log("sorry, we are of ${expr}");
break;
}