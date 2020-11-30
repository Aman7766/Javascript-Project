let count=0;
let btnDec=document.getElementById("dec");
let btnRes=document.getElementById("rec");
btnDec.addEventListener("click",Dec);
btnRes.addEventListener("click",Res);
let val=document.getElementById("counter");
let btnInc=document.getElementById("inc");
btnInc.addEventListener("click",Inc);

function Dec()
{    
    check();
count=count-1;
val.textContent=count;    
}
function Res()
{
 check();
    count=0;
    val.textContent=count;  
    
}
function Inc()
{
check();
count=count+1;   
val.textContent=count;
}
function check()
{
    if(count<0)
    {
        val.style.color="red";
    }
     if(count>0)
    {
        val.style.color="green";
    }
     if(count===0)
    {
        val.style.color="black";
    }
}
