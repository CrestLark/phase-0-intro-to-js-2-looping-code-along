const names = (["Lisa", "Kaitlin", "Jan"], "surprise");

function writeCards(names) {
   let messages=[];
   for( let i= 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
   }
   return messages;
}


function countDown(integers) {
    let i= 10 
    while (i >= 0){
        console.log(i)
        i--;
    }
    debugger;
    return integers;
}
