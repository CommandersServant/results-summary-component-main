const resultScore = document.querySelector('#score');
const reactionScore = document.querySelector('#reaction-score');
const memoryScore = document.querySelector('#memory-score');
const verbalScore = document.querySelector('#verbal-score');
const visualScore = document.querySelector('#visual-score');
const percentageAmount = document.querySelector('#percentage');

resultScore.innerHTML = scoreAverage;
reactionScore.innerHTML = scoreReaction;
memoryScore.innerHTML = scoreMemory;
verbalScore.innerHTML = scoreVerbal;
visualScore.innerHTML = scoreVisual;
percentageAmount.innerHTML = percentage.toString() + "%"
