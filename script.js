function compute(p,r,t)
{
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('years').value;
    if (p<=0) {
        document.getElementById("alert").innerHTML="Please enter a positive number";
        document.getElementById("text1").innerHTML="";
        document.getElementById("text2").innerHTML="";
        document.getElementById("text3").innerHTML="";
        document.getElementById("text4").innerHTML="";
    } else{
    document.getElementById("alert").innerHTML="";
    var totalinterest = p * r / 100 * t;
    var ptext = p.toString();
    var rtext = r.toString();
    var answer = totalinterest.toString();
    var year = new Date();
    var yearint = year.getFullYear();
    var monthint = year.getMonth();
    var future = new Date(yearint, 12*t+monthint);
    document.getElementById("text1").innerHTML="If you deposit "+ ptext+",";
    document.getElementById("text2").innerHTML="at an interest rate of "+ rtext+"%.";
    document.getElementById("text3").innerHTML="You will receive an amount of "+ answer+",";
    document.getElementById("text4").innerHTML="in the year "+ future.getFullYear();
    }
}
function updateTextInput(val)
{
   document.getElementById("texthere").innerHTML=val+"%";
}
function ShiftFocus()
{
    document.getElementById("principal").focus();
}