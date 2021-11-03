function compute()
{
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('years').value;
    var totalinterest = p * r * t;
    document.getElementById('text1').value=p;
    document.getElementById('text2').value=r+"%";
    document.getElementById('text3').value=totalinterest;


}
function updateTextInput(val)
{
    document.getElementById('textInput').value=val+"%";
}