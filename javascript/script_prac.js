function greet(){
    alert("Good Evening");
}


var btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    var para=document.getElementsByTagName('p')[0];
    para.style.fontStyle="italic";
    para.style.fontSize="30px";

    var test=document.getElementById('test');
    test.style.color="pink";

    var blue=document.getElementsByClassName('blue');
    blue[0].innerHTML="This is new content";
    blue[0].style.fontSize="30px";

    blue[1].style.display="none";
})

 var txt=document.getElementsByClassName('message')[0];
 txt.addEventListener('keyup',function(){
     var data=txt.value;
     var disp=document.getElementById('disp');
     disp.innerHTML=data;
 })

 sh=document.getElementById('sh');
 sh.addEventListener('click',function(){
     pwd=document.getElementsByName('pwd')[0];
     var type=pwd.getAttribute('type');
     if(type=='password'){
         pwd.setAttribute('type','text');
         sh.innerHTML('hide');
     }else{
         pwd.setAttribute('type','password');
         sh.innerHTML('show');
     }
 })