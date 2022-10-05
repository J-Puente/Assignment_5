//for loop

for(let i = 0; 
    i<5; 
    i++)
console.log (i);

//for loop | Stop a loop by using break; 
console.log ("Who's your favorite?:");

const names = ["Leonardo","Michelangelo","Donatello", "Raphael"];

for (name of names) {
    console.log (names);

    if(name === "Leonardo"){
        console.log("Leonardo? Ah, twin katanas for the win!");
}
    if(name === "Michelangelo"){
        console.log("Mikey?! Cowabunga! Pull out the nunchucks!");
}
    if(name === "Donatello"){
         console.log("Donatello? Kon! THE staff of defense.");
}
    if(name === "Raphael"){
        console.log("Raphael? A fan of the Okinawa Sai, I see!!");
    }
}

//while loop
let i = 0;

while (i <= 5) {
    console.log(i);

    i++;
}

//Change CSS with JS
document.querySelector('.title').style = "color: green; font-size: 60px;";

