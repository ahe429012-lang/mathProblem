   <script>
      
            var x;
            var y;
            var ans;
            let timeLeft=60;
            var timerDisplay = document.getElementById("timerDisplay");
            function endQuiz(){
                myAns.disabled= true;
                start===false;
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
            ans=x*y
            const start = false;
            var myAns = document.getElementById("myAns")
            var userAnswer = Number(myAns.value);
            var mark = document.getElementById("mark")
            var correct = 0;
        function start(){
            start = true;
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
            ans=x*y;
            updateNum();
           await sleep(15000);
           if (ans === userAnswer){
               mark.textContent = "Correct";
               correct++;
           }
           else{
               mark.textContent = "Incorrect";
           }
           
        }
        
        const button = document.getElementById("start")
        button.addEventListener("click", start);
            if(start===true){
              for(questions<15;questions++;) problem();
            }
            
            var score = correct/questions;
            var scoreBoard=document.getElementById("score")
            scoreBoard.textContent= score;
        </script>
