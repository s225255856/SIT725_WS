const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a great dinner!")
}

document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`/add?num1=${num1}&num2=${num2}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: ' + error;
        });
});

$(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});