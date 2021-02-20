function fxn()
{
    
    if(document.getElementById("spcb").checked == true)
    document.getElementById("p").type="text";
    else
    document.getElementById("p").type="password";
}
function equalizepcp()
{
    // document.getElementById("deb2").style.display="block";
    // document.getElementById("deb2").innerHTML=document.getElementById("p").value+"=" +document.getElementById("cp").value;
    if(document.getElementById("p").value != document.getElementById("cp").value)
    {
        document.getElementById("r").style.display="block";
        document.getElementById("chkbox").checked = false;
    }
    else
    document.getElementById("r").style.display="none";

}
function unctc()
{
    // document.getElementById("deb").style.display="block";
    // document.getElementById("deb").innerHTML="eneterd unctc"
    document.getElementById("chkbox").checked = false;
}