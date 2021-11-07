function compute(p,r,t)
{
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('years').value;
    var year = new Date().getFullYear()+parseInt(t);
    var totalinterest = p * r / 100 * t;
    if (p<=0) {
        alert('Please enter a positive number');
        document.getElementById("principal").focus();

        
        /*document.getElementById("alert").innerHTML="Please enter a positive number";
        document.getElementById("text1").innerHTML="";
        document.getElementById("text2").innerHTML="";
        document.getElementById("text3").innerHTML="";
        document.getElementById("text4").innerHTML="";*/
    } else{
        document.getElementById("result").innerHTML="If you deposit $"+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of $"+totalinterest+",\<br\>in the year "+year+"\<br\>";
    
    
        //document.getElementById("alert").innerHTML="";
    
    //var ptext = p.toString();
    //var rtext = r.toString();
    //var answer = totalinterest.toString();
    // var year = new Date();
    //var yearint = year.getFullYear();
    //var monthint = year.getMonth();
    //var future = new Date(yearint, 12*t+monthint);
    //document.getElementById("text1").innerHTML="If you deposit "+ ptext+",";
    //document.getElementById("text2").innerHTML="at an interest rate of "+ rtext+"%.";
    //document.getElementById("text3").innerHTML="You will receive an amount of "+ answer+",";
    //document.getElementById("text4").innerHTML="in the year "+ future.getFullYear();
    }
}
function updateTextInput(val)
{
   document.getElementById("rate_val").innerHTML=val+"%";
}
/*
function ShiftFocus()
{
    document.getElementById("principal").focus();
}*/