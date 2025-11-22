const h1 =document.getElementById("h1");
const btn = document.getElementById("btn");
const btn2 =document.getElementById("btn2");

btn.addEventListener("click", ()=>{
    h1.innerHTML = "Your Data Is Saved ";
})
btn2.addEventListener("click", ()=>{
    h1.innerHTML="";
})

const greeting = function(name){
return "Hello Dear "+name;
}
const Mah= greeting("Mahtab");
const Hasti = greeting("Hasti");

const name="Taqi";
const score =70;
const course ="Sharifi Center"
const result =score>50? ` Dear ${name}  Your score is ${score} and you successfully passed the ${course} exam's`: "You failed";

const blood =120;
if (blood>50){
    console.log("your blood presure is low")
}
else if(blood<100){
    console.log("your blood presure is high")
}
else{
    console.log("You don't have any problem")
}

 