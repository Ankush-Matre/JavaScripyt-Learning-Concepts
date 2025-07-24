let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover" , function(){
//     abcd.style.backgroundColor = "green";
// });

// abcd.addEventListener("mouseout" , function(){
//     abcd.style.backgroundColor = "red";
// });


abcd.addEventListener("mousemove" , function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
});