//Event Listner

let h1 = document.querySelector("h1");

h1.addEventListener("click" , function(){
    h1.style.color = "red";
});

let p = document.querySelector("p");

p.addEventListener("dblclick" , function() {
    p.style.color = "green";
});

//this can be the also a way to add event listenr 
let div = document.querySelector("div");
function clickfun(){
    div.style.backgroundColor = "Black";
}
div.addEventListener("click" , clickfun);


div.removeEventListener("click" , clickfun);

// let input = document.querySelector("input");
// input.addEventListener("input" , function(){
//     console.log("typed");
// })


let inp = document.querySelector("input");

inp.addEventListener("input" , function(details){
    if(details.data !== null){
        console.log(details.data);
    }
});

let select = document.querySelector("select");

select.addEventListener("change" , function(detls){
    console.log(detls.target.value);
});

let selectn = document.querySelector("select");
let device = document.querySelector("#device");

select.addEventListener("change" , function(dets){

    device.textContent = `${dets.target.value} is Selected`;
    device.style.color = "red";

});