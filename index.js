
let namesArray=["Guadalupe", "Ollie", "Aki"]
function writeCards(namesArray,eventNai){
    let eventcards=[]
    for (let i=0; i<namesArray.length; i++) {
    eventcards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventNai} gift!`);
    debugger;
}
return eventcards;
}
function countdown(myInt){
    let startingNumber=myInt

        while(startingNumber>0); {
            console.log(startingNumber);
            startingNumber--;
        
    }
    console.log(startingNumber)
}