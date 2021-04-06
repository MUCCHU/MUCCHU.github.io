// var opt=document.getElementsByClassName("options");
// // opt[1].style.color="red";
// var i;
// for(i=0;i<opt.length;i++)
// {
//     opt[i].addEventListener("click", function()
//     {
//        this.parentElement.style.backgroundColor="red";
//     });
// }
var questions= ["When was the GES(Global Entrepreneurship) 2021 held?",
 "Who is the only senior manager of the E-cell from Web team?", 
 "When was the E-cell established?", 
 "E-cell has three teams except:",
  "Where was GES 2021 held?",
   "In total, how many AMs are form Web Team?",
    "How many posts are there in the E-cell above Senior Manager",
     "What is Startin?",
      "How many SAs are there in the E-cell",
       "What does being a part of E-cell Guarantee?"];
var option1=["January", "Hritik Mehta", "2006", "Core", "Sydney", "7", "2", "An initiative by Indian government to encourage startups", "2", "A sweet girlfriend"];
var option2=["February", "Sarthak Chauhan", "2002", "Design", "New York", "5", "4", "A UN initiative to encourage statups", "5", "New skills and experience"];
var option3=["March", "Shashwat M Das", "1999", "Advertisement", "IIT KGP Campus", "6", "3", "E-cell's initiative to provide students with internships", "7", "10 CGPA"];
var option4=["April", "Anindya Sikdar", "2008", "Web", "Online", "8", "1", "An initiative by US government to encourage startups", "6", "Placement with the best package"];
var answers=[2, 3, 1, 3, 4, 1, 1, 3, 4, 2];
var attempted=[false, false, false, false, false, false, false, false, false, false];
var responses=new Array(10);
var marks=[0,0,0,0,0,0,0,0,0,0];
var currentque=0;
entryscreen();
function entryscreen()
{
   document.getElementsByClassName("q")[0].style.display="none";
   document.getElementsByClassName("a")[0].style.display="none";
   document.getElementsByClassName("bottom-foot")[0].style.display="none";
   document.getElementsByClassName("instructions")[0].style.display="none";
   document.getElementsByClassName("confirmation")[0].style.display="none";
   document.getElementsByClassName("Result")[0].style.display="none";
  
}
function Instructions()
{
    document.getElementsByClassName("q")[0].style.display="none";
    document.getElementsByClassName("start-page")[0].style.display="none";
    document.getElementsByClassName("instructions")[0].style.display="block";
    document.getElementsByClassName("confirmation")[0].style.display="flex";
    document.getElementsByClassName("bottom-most-foot")[0].style.height="auto";
}
function displayFirstque()
{
    document.getElementsByClassName("instructions")[0].style.display="none";
    document.getElementsByClassName("confirmation")[0].style.display="none";
    document.getElementsByClassName("q")[0].style.display="block";
   document.getElementsByClassName("a")[0].style.display="block";
   document.getElementsByClassName("bottom-foot")[0].style.display="flex";
   document.getElementsByClassName("bottom-most-foot")[0].style.minHeight="90px";
   document.getElementsByClassName("bottom-most-foot")[0].style.paddingLeft="20px";
   document.getElementsByClassName("bottom-most-foot")[0].style.paddingRight="20px";
   document.getElementsByClassName("bottom-most-foot")[0].style.paddingTop="20px";
   document.getElementsByClassName("bottom-most-foot")[0].style.paddingBottom="20px";
   changeqanda();
}
// changeqanda();
function formatthis(clicked)
{
    console.log("A button is clicked");
    console.log(this);
    attempted[currentque]=true;
    responses[currentque]=clicked;
    for(var i=0;i<4;i++)
    {
        document.getElementsByClassName("options")[i].style.pointerEvents="none";
        document.getElementsByClassName("options")[i].style.cursor="default";
    }
    if(clicked==answers[currentque]){
         document.getElementById(clicked).style.backgroundColor="#39ff14";
         marks[currentque]=1;
         correctans();
         console.log("Marks have been awarded")
         console.log(marks[currentque]);
    }
    else
    {
        document.getElementById(clicked).style.backgroundColor="#fe0000"; 
        marks[currentque]=0;
        wrongans();
        console.log("Marks have been awarded")
         console.log(marks[currentque]);
    }
    document.getElementById(answers[currentque]).style.backgroundColor="#39ff14";
    // document.getElementById(clicked).innerHTML=clicked;
}
function prevq()
{
    document.getElementsByClassName("bottom-most-foot")[0].innerHTML="";
    if(currentque!=0)
    currentque--;
    
    if(currentque<9){
    document.getElementsByClassName("next-butt")[0].innerHTML="Next";
    document.getElementsByClassName("next-butt")[0].onclick=nextq;
    }
    console.log(currentque);
    changeqanda();
}
function nextq()
{
    document.getElementsByClassName("bottom-most-foot")[0].innerHTML="";
    console.log("nextq");
    if(currentque!=9)
    currentque++;

    if(currentque==9){
    document.getElementsByClassName("next-butt")[0].innerHTML="Finish";
    document.getElementsByClassName("next-butt")[0].onclick=showresult;
    }

    console.log(currentque);
    changeqanda();
}
function changeqanda()
{
    console.log("In the changeqanda fxn");
    document.getElementsByClassName("q")[0].innerHTML=questions[currentque];
    document.getElementById("1").innerHTML=option1[currentque];
    document.getElementById("2").innerHTML=option2[currentque];
    document.getElementById("3").innerHTML=option3[currentque];
    document.getElementById("4").innerHTML=option4[currentque];

        console.log("This que is not answered... reverting things back");
        for(var i=0;i<4;i++)
         {
             document.getElementsByClassName("options")[i].style.backgroundColor="#e5e8ef";
             document.getElementsByClassName("options")[i].style.pointerEvents="auto";
             document.getElementsByClassName("options")[i].style.cursor="pointer";
         }
    
    if(attempted[currentque]==true)
    {
        for(var i=0;i<4;i++)
          {
             document.getElementsByClassName("options")[i].style.pointerEvents="none";
            document.getElementsByClassName("options")[i].style.cursor="default";
          }
        if(responses[currentque]==answers[currentque]){
            correctans();
         document.getElementById(responses[currentque]).style.backgroundColor="#39ff14";
        }
        else
        {
              wrongans();
              document.getElementById(responses[currentque]).style.backgroundColor="#fe0000"; 
        }
         document.getElementById(answers[currentque]).style.backgroundColor="#39ff14";
        }
}
function showresult()
{
    document.getElementsByClassName("bottom-most-foot")[0].innerHTML="";
    document.getElementsByClassName("q")[0].style.display="none";
    document.getElementsByClassName("a")[0].style.display="none";
    document.getElementsByClassName("bottom-foot")[0].style.display="none";
    document.getElementsByClassName("Result")[0].style.display="block";
    var totm=0;
    for(var i=0;i<10;i++)
    {
        console.log("marks");
        console.log(marks[i]);
        console.log("totm");
        console.log(totm);
        totm+=marks[i];
    }
    document.getElementsByClassName("marks-obtained")[0].innerHTML=totm;
}
function correctans()
{
    document.getElementsByClassName("bottom-most-foot")[0].style.color="#39ff14";
    document.getElementsByClassName("bottom-most-foot")[0].innerHTML="Wow ! that was a perfect answer by you";
}
function wrongans()
{
    document.getElementsByClassName("bottom-most-foot")[0].style.color="#fe0000";
    document.getElementsByClassName("bottom-most-foot")[0].innerHTML="Ohh Dear ! Better luck next time";
}
function checkifticked()
{
    if(document.getElementById("inst").checked==true)
    {
             document.getElementById("start-butt").style.opacity="1";
             document.getElementById("start-butt").style.pointerEvents="auto";
             document.getElementById("start-butt").style.cursor="pointer";
    }
    else
    {
        document.getElementById("start-butt").style.opacity="0.7";
        document.getElementById("start-butt").style.pointerEvents="none";
        document.getElementById("start-butt").style.cursor="default";
    }

}