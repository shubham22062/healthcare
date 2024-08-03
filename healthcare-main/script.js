function calculateScore() {
    const form = document.getElementById('quizForm');
    let score = 0;
    let allAnswered = true;
    
    const answers = ['q1', 'q2', 'q3', 'q4', 'q5'];
    answers.forEach((answer) => {
        const radios = form.elements[answer];
        let answered = false;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                score += parseInt(radios[i].value);
                answered = true;
                break;
            }
        }
        if (!answered) {
            allAnswered = false;
        }
    });

    const result = document.getElementById('quiz-result');
    if (!allAnswered) {
        result.textContent = "Please answer all questions before submitting.";
    } else {
        if (score <= 4) {
            result.textContent = "You are managing your stress well. Keep up the good work!";
        } else if (score <= 8) {
            result.textContent = "You have some stress. Consider adopting some stress management techniques.";
        } else {
            result.textContent = "You are experiencing high levels of stress. It's important to take steps to manage it.";
        }
    }
    // Change button color on click
    document.getElementById('submit-btn').classList.add('clicked');
}

function refreshQuiz() {
    const form = document.getElementById('quizForm');
    form.reset();
    document.getElementById('quiz-result').textContent = "";
    // Reset button color
    document.getElementById('submit-btn').classList.remove('clicked');
}
