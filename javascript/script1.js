console.log("This is External Javascript");

function greet(){
    alert("Good Afternoon");
}


btn=document.getElementsByClassName("ce")[0];
btn.addEventListener("click",function(){
    var para=document.getElementsByTagName("p");
    para[0].style.color="green";
    para[0].style.fontSize="36px";

    var test=document.getElementById("test");
    test.style.fontSize="24px";
    test.style.textDecoration="underline";

    var blue=document.getElementsByClassName("blue");
    blue[0].style.color="blue";
    blue[0].style.fontSize="24px";
    blue[1].style.display="none";

})

txtarea=document.getElementsByClassName("message")[0];
txtarea.addEventListener("keyup",function(){
    var data=txtarea.value;
    var disp=document.getElementById("disp");
    disp.innerHTML=data;
    disp.style.color="gray";
    disp.style.fontSize="24px";
});

var sh=document.getElementById("sh");
sh.addEventListener("click",function(){
     pwd=document.getElementsByName("pwd")[0];
    var type=pwd.getAttribute("type");
    if(type=="password"){
        pwd.setAttribute("type","text");
        sh.innerHTML="Hide";
    }else{
        pwd.setAttribute("type","password");
        sh.innerHTML="Show";
    }
});