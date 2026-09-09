   
      
            var x;
            var y;
            var ans;
            var questions;
            var startQuiz=false;   
            let timeLeft=60;

            var timerDisplay = document.getElementById("timerDisplay");
           var myAns = document.getElementById("myAns");
function endQuiz(){
                myAns.disabled= true;
                startQuiz=false;
            }
            const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

            
            x=1;
            y=1;
           
          
            
            var userAnswer = Number(myAns.value);
            var mark = document.getElementById("mark");
            var correct = 0;
        
function start(){
            startQuiz = true;
            myAns.disabled=false;
            questions = 0;
            var timer = setInterval(function(){
                timeLeft--;
    timerDisplay.textContent =
        "Time: " + timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
}, 1000);
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

async function submitNum (){

     ans=x*y;
      myAns=document.getElementById("myAns");
      userAnswer=Number(myAns.value);
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
            myAns.value="";
  };
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { 
     submitNum();
  }
});
        
        const button = document.getElementById("start")
        button.addEventListener("click", start);
            if(startQuiz===true){
              problem();
            }
            
            var score = correct/questions;
            var scoreBoard=document.getElementById("score");
            scoreBoard.textContent= score;

