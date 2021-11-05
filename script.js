function compute(p,r,t)
{
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('years').value;
    var totalinterest = p * r / 100 * t;
    var ptext = p.toString();
    var rtext = r.toString();
    var answer = totalinterest.toString();
    var thisyear = new Date().getFullYear();
    var year = parseInt(thisyear);
    year += t;
    document.getElementById("text1").innerHTML="If you deposit "+ ptext+",";
    document.getElementById("text2").innerHTML="at an interest rate of "+ rtext+"%.";
    document.getElementById("text3").innerHTML="You will receive an amount of "+ answer+",";
    document.getElementById("text4").innerHTML="in the year "+ year;

   document.getElementById("texthere").innerHTML = val;

}
function updateTextInput(val)
{
   document.getElementById("texthere").innerHTML=val+"%";
    
    //var text=document.createTextNode('TextyTextyText');
    //var target = document.getElementById('texthere');
   // target.parentNode.insertBefore(text, target);
}