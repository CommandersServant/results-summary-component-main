const data = 
`
[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
]
`

const dataObj = JSON.parse(data);

const scoreReaction = dataObj[0].score;
const scoreMemory = dataObj[1].score;
const scoreVerbal = dataObj[2].score;
const scoreVisual = dataObj[3].score;

const scoreSum = (parseInt(scoreReaction) + parseInt(scoreMemory) + parseInt(scoreVerbal) + parseInt(scoreVisual));
const scoreAverage = Math.round(scoreSum / 4);
const percentage = Math.round((65 * scoreAverage) / 76);
