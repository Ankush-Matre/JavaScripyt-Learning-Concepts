// let a = document.querySelector("#a");
// let b = document.querySelector("#b");
// let c = document.querySelector("#c");
// let btn = document.querySelector(".btn");

// a.addEventListener("click" , function(){
//     console.log("a is Clicked");
// });

// b.addEventListener("click" , function(){
//     console.log(" is Clicked");
// });
// c.addEventListener("click" , function(){
//     console.log("C is Clicked");
// });
// btn.addEventListener("click" , function(){
//     console.log("Btn is Clicked");
// });

//yyele mnte event bubbling 
//ata eth kay zal suravat le a check zla ki tith captire phase on ahw ka tr 
//ata thith off hota capture phase
//manun te as b an c bi check hote capture phase sathi btn bhi check hote
//jenvha sarvikadde capture phase off rayate 
//mng chalu hote bubbling phase je ki btn to a jate for
//event listener



let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector(".btn");

//the way to on capture phase
a.addEventListener("click" , function(){
    console.log("a is Clicked");
} , true);

b.addEventListener("click" , function(){
    console.log("B is Clicked");
});
c.addEventListener("click" , function(){
    console.log("C is Clicked");
});
btn.addEventListener("click" , function(){
    console.log("Btn is Clicked");
});