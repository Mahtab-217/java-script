let number=10;
if(number!==10){
    console.log("number equals to 10 ")
}

else{
    console.log("number doesn't equal to 10")
}

let name1="Hamid";
if(number!=="Hamid"){
    console.log("Hello dear Hamid ")
}
else{
    console.log("We don't know you")
}

const number1=123;
if(number%4==0){
    console.log("this " + number1 + " can be devided on 4")
}
else if(number%5==0){
    console.log("this " + number1 + " can't be devided on 5")
}
else{
    console.log("the number is not a good number")
}

let number2=23;
if(number%6==0){
    console.log("این عدد قابل تقسیم بر شش نیست")
}
else{
    console.log("این عدد قابل تقسیم بر شش هست")
}

const  score = prompt("Enter your number");
if(score>=90 && score<=100){
    console.log("you are in group A")
}
else if(score>=80){
    console.log("You are in gruope B")
}
else if(score>=70){
    console.log("Groupe C")
}
else{
    console.log("You fail dear")
}
const Email = prompt("Enter your Email")
let name="Ali";
switch(name){
    case "Ali":
        console.log("Hi Ali");
        break;
        case "Ahmad":
            console.log("Hi Ahmad");
            break;
            default:
                console.log("We don't know you");

}

