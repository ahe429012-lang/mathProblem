   
      
            var x;
            var y;
            var ans;
            var questions;
            var startQuiz=false; 
            var timer;
            var scoreBoard;
            let timeLeft=60;
            var correctAns=document.getElementById("Ans");
            const button = document.getElementById("start")

            var timerDisplay = document.getElementById("timerDisplay");
           var myAns = document.getElementById("myAns");

               function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endQuiz(){
                myAns.disabled= true;
                startQuiz=false;
               button.style.display="block";
               clearInterval(timer);
            }
            const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

            
            x=1;
            y=1;
           
          
            
            var userAnswer = Number(myAns.value);
            var mark = document.getElementById("mark");
            var correct = 0;

function updateNum(){
                var qX=document.getElementById("x");
                var qY=document.getElementById("y");
                qX.textContent=x;
                qY.textContent=y;
                scoreBoard=document.getElementById("score");
            scoreBoard.textContent= "Accuracy:"+correct+"/15";
}

function problem(){
            x=rand(1,10);
            y=rand(1,10);
           
            updateNum();
          
        };


function start(){
            startQuiz = true;
            myAns.disabled=false;
            button.style.display="none";
            questions = 0;
            timer = setInterval(function(){
                timeLeft--;
    timerDisplay.textContent =
        "Time: " + timeLeft+"  Seconds";
}, 1000);
    if (timeLeft <= 0) {
        endQuiz();
    }
   problem();
}
            

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
              correctAns.textContent="The Correct Answer Is:"+ans;
           }
           await sleep(1000);
            mark.textContent = "";
            correctAns.textContent = "";
           if(questions<15){
              problem();
            questions++;
           }
         else{
            endQuiz();
         }
            myAns.value="";
  };
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { 
     submitNum();
  }
});
        
        
        button.addEventListener("click", start);
            if(startQuiz===true){
              problem();
            }
            
            var score = correct+"/"+"15";
            scoreBoard=document.getElementById("score");
            scoreBoard.textContent= score;
            if (timeLeft<=0)
            {endQuiz();};
