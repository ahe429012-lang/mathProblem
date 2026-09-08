   
      
            var x;
            var y;
            var ans;
            let timeLeft=60;

            var timerDisplay = document.getElementById("timerDisplay");
           var myAns = document.getElementById("myAns");
function endQuiz(){
                myAns.disabled= true;
                start=false;
            }
            
var timer = setInterval(function(){
                timeLeft--;
    timerDisplay.textContent =
        "Time: " + timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
}, 1000);
            
            x=1;
            y=1;
           
            var start = false;
            
            var userAnswer = Number(myAns.value);
            var mark = document.getElementById("mark");
            var correct = 0;
        
function start(){
            start = true;
            myAns.disabled=false;
            var questions = 0;
}
            
function updateNum(){
                var qX=document.getElementById("x");
                var qY=document.getElementById("y");
                qX.textContent=x;
                qY.textContent=y;
}

function problem(){
            x=rand(1,10);
            y=rand(1,10);
           
            updateNum();
          
        };

function submitNum (){

     ans=x*y;
      myAns=document.getElementById("myAns");
      userAnswer=number(myAns.value);
      if (ans === userAnswer){
               mark.textContent = "Correct";
               correct++;
           }
           else{
               mark.textContent = "Incorrect";
           }
           await sleep(1000);
            
            problem();
            questions++;
            myAns.textContent="";
  };
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { 
     submitNum():
  }

        
        const button = document.getElementById("start")
        button.addEventListener("click", start(););
            if(start===true){
              for(questions<15;questions++;) problem();
            }
            
            var score = correct/questions;
            var scoreBoard=document.getElementById("score")
            scoreBoard.textContent= score;

