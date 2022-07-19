'use strict'
let random = Math.trunc(Math.random()*20 + 1);
let Score  = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.input').value);
    if(!guess){
        document.querySelector('.change').textContent = 'No Number';
    }
else if(guess === random){
    document.querySelector('.change').textContent = 'Correct Number!';
    document.querySelector('.number').textContent =  random;
    Score++;
  
    document.querySelector('.score').textContent =  Score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.input').style.backgroundColor = '#60b347';
    
}
else if(guess > random){
    if(Score > 0){
        document.querySelector('.change').textContent = 'Too High!';
        Score--;
        
    document.querySelector('.score').textContent =  Score;
        document.querySelector('body').style.backgroundColor = '#f44336';
        document.querySelector('.input').style.backgroundColor = '#f44336';
    }
   
}
else if(guess < random){
    if(Score > 0){
        document.querySelector('.change').textContent = 'Too Low!';
        Score--;
     
    document.querySelector('.score').textContent =  Score;
        document.querySelector('body').style.backgroundColor = '#f44336';
        document.querySelector('.input').style.backgroundColor = '#f44336';
    }
}

});
document.querySelector('.again').addEventListener('click',function(){
   if(highScore < Score){
highScore = Score;
    document.querySelector('.h-score').textContent = highScore;
   }
  
Score = 20;
random = Math.trunc(Math.random()*20 + 1);
  document.querySelector('.score').textContent = Score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent =  '?';
document.querySelector('.input').textContent = ' ';
  document.querySelector('.input').style.backgroundColor = '#222';
  document.querySelector('.change').textContent = 'start guessing....';
  document.querySelector('.input').value = '';
})
