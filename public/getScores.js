const getJson = async () => {
    try {
        const response = await fetch('/public/data.json')
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            throw new Error('Request failed!');
        }
    } catch (error) {
        console.log(error)
    }
}

const getScores = async () => {
    const data = await getJson();
    const scoreReaction = data[0].score;
    const scoreMemory = data[1].score;
    const scoreVerbal = data[2].score;
    const scoreVisual = data[3].score;

    const scoreSum = (parseInt(scoreReaction) + parseInt(scoreMemory) + parseInt(scoreVerbal) + parseInt(scoreVisual));
    const scoreAverage = Math.round(scoreSum / 4);
    const percentage = Math.round((65 * scoreAverage) / 76);

    resultScore.innerHTML = scoreAverage;
    reactionScore.innerHTML = scoreReaction;
    memoryScore.innerHTML = scoreMemory;
    verbalScore.innerHTML = scoreVerbal;
    visualScore.innerHTML = scoreVisual;
    percentageAmount.innerHTML = percentage.toString() + "%"

}

getScores()
