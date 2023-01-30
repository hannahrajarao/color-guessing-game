let answer = [0, 0, 0];
function chooseRandomColor() {
    let color = [0, 0, 0];
    for(let i=0; i<color.length; i++)
        color[i] = Math.floor(Math.random()*256);
    return color;
}

function displayColor(color, elementId) {
    const element = document.getElementById(elementId);
    if(typeof(color) === 'string')
        element.style.backgroundColor = color;
    else
        element.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function displayNewColor(elementId) {
    document.getElementById('your-color-text').style.display = 'none';
    displayColor('white', 'your-color');
    clearInputs();
    document.getElementById("score").innerHTML = ""
    answer = chooseRandomColor();
    displayColor(answer, elementId);
}

function checkAnswer() {
    document.getElementById("answer").innerHTML = "The correct answer is " + answer;
    document.getElementById("score").innerHTML = "Your score: "+getScore();
    document.getElementById('your-color-text').style.display = 'block';
    document.getElementById('your-color-text').innerHTML = "Your color would be:"
    displayColor(getInputColor(), 'your-color');

}

function resetInputs() {
    document.getElementById("red").value = 0;
    document.getElementById("green").value = 0;
    document.getElementById("blue").value = 0;
}

function getInputColor() {
    const red = parseInt(document.getElementById("red").value)
    const green = parseInt(document.getElementById("green").value)
    const blue = parseInt(document.getElementById("blue").value)
    return [red, green, blue];
}

function getScore() {
    const input_color = getInputColor();
    const redScore = Math.abs(input_color[0] - answer[0]);
    const greenScore = Math.abs(input_color[1] - answer[1]);
    const blueScore = Math.abs(input_color[2] - answer[2]);
    return redScore + greenScore + blueScore;
}

function showAnswer(elementId) {
    // displayColor(answer, elementId);

}