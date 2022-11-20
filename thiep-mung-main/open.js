var box=document.getElementById("present");
var image=document.getElementById("image-container");
var happy=document.getElementById("happy");
var playAudio= document.getElementById("playAudio");


function open(){
    // box.style.display="none";
    box.setAttribute("class","present-box open");
 happy.setAttribute("class","happy");
 playAudio.play();
// alert("a");

}
box.addEventListener('click',open);




