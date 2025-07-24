let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

submitBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = 'green';
    submitBtn.disabled = true;
    restartBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = 'red';
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = 'red';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});

restartBtn.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  message.style.color = '#333';
  attemptsDisplay.textContent = 'Attempts: 0';
  submitBtn.disabled = false;
  restartBtn.style.display = 'none';
  guessInput.value = '';
  guessInput.focus();
});
