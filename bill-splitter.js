//prompt for bill amount
//how much did person1 pay?
//how much did person2 pay?
//get total bill amount
//make it so both people payed even amount
const prompt = require("prompt-sync")();
let person1 = Number(prompt("How much did first person pay?"));
let person2 = Number(prompt("How much did second person pay?"));

let split = (person1 + person2) /2;
    if ((person1 - split) < 0 ){
        let due_amount = Math.abs(person1 - split)
        console.log ("second person owes first person $" + due_amount)
    }

    if ((person1-split) > 0 ){
        let due_amount = Math.abs(person1 - split)
        console.log ("first person owes second person $" + due_amount)
    }