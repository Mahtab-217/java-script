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
