function saveAnswers() {
    const form = document.getElementById('questionForm');
    const answers = {};

    // Collect answers from the form
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type === 'radio' && element.checked) {
            answers[element.name] = element.value;
        }
    }

    // Convert answers to a JSON string
    const answersJSON = JSON.stringify(answers);

    // Create a Blob containing the JSON data
    const blob = new Blob([answersJSON], { type: 'application/json' });

    // Create a download link and trigger a click event to download the file
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'answers.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}