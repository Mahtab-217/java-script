const name="Hasti";
const result=name==="zainab"?"Hi dear Zainab you are my sister":name==="Ali"?"Hi dear Ali you are my brother":name==="Hasti"?"Hi dear Hasti you are my cousin":"I don't know you";
const number=10;
const result2=number<=20 && number>=15?"You are in gruoup A":number>=7?"You are in group B":"You are in group C";
const greeting = (name,lastName)=>{
console.log("Hi there dear "+name +" "+lastName);
}
greeting("Gandom","Raha");

const Hi =(name,lastName) => ` Welcome dear ${name}${lastName}`;
const Hello =Hi(" Sama ", " Alisada");

const Say=(a,b="Frishta")=>`Your father name is ${a} and your own name is ${b}`;
const say= Say("Asghar");

// const score=(...a)=>{
//     let total =0;
//     for(let i=0; i<a.length;i++){
//         total=total+a[i];
//     }
//     console.log();

// }
// score(3,4,3,4,5,7)
const sum=(...a)=>{
      let total =0;
   for(let i=0; i<a.length;i++){
       total=total+a[i];
   }
    console.log(total);
}
sum(323,23,15,65,76,8,90,880)

const plus =(...b)=>{
    let all =0;
    for(let n=0; n<b.length;n++){
        all=all-b[n];
    }
    console.log(all);
}
plus(3,4,5,50,90,99,88,77.89)