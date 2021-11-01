function compute()
{
    p = Document.getElementById("principal").value;
    r = Document.getElementById("rate").value;
    t = Document.getElementById("years").value;
    var totalinterest = p * r * t;
    return totalinterest;
}
        