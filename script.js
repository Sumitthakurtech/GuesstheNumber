`strict`
const secretNumber = Math.floor(Math.random()*20+1); //To generate Secret Number
let score = 20 // Score stored in Seperate variable
let highScore = 0;

document.querySelector(".check").addEventListener('click',function(){
  let guess = document.querySelector('.guess').value;

  // --------------------------- When No Value is Entered ---------------------------------
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Select Number 🟥🟥🟥';
  }

  // ----------------------- When Guess is Equal to secret Number ---------------------------------
  if (guess == secretNumber) {
    if (score > 0) {
      document.querySelector(
        '.message'
      ).textContent = `${secretNumber} is the correct Number🙌`;
      document.querySelector('.number').textContent = `You Won!!! 🏆🥳`;
      document.querySelector('body').style.backgroundColor = 'rgb(0,100,0)';
      document.querySelector('.number').style.width = '30em';
      if(score>highScore){
        highScore=score;
      document.querySelector(".highscore").textContent=highScore;
      }
      
    }
  }

  // ----------------------- When Guess is greater than secret Number-------------------------------
  if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Try a Lower Number📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // ----------------------- When Guess is smaller than secret Number-------------------------------
  if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Try a Higher Number📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

//---------------------------Again Button ------------------------------------------------------

document.querySelector(".again").addEventListener('click',function(){
  document.querySelector('.message').textContent = `Keep Guessing`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.number').style.width = '15em';
  score=0;
  document.querySelector(".score").textContent=score;
  document.querySelector('body').style.backgroundColor = 'rgba(34,34,34,255)';
})
})