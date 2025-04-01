const cardList = [
    {
        title: "That barrack",
        image: "images/250.png",
        link: "About this town hall",
        description: "give me your trophy"
    },
    {
        title: "Another barrack",
        image: "images/250.png",
        link: "About archer queen",
        description: "give me your trophy"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a great dinner!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
                    '<div class="card medium">'+
                        '<div class="card-image waves-effect waves-block waves-light">'+
                            '<img class="activator" src="'+item.image+'" alt="#">'+
                        '</div>'+
                        '<div class="card-content">'+
                            '<span class="card-title activator grey-text text-darken-4">'+item.title+'</span>'+
                            '<p><a href="#">'+item.link+'</a></p>'+
                        '</div>'+
                        '<div class="card-reveal">'+
                            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                            '<p class="card-text">'+item.description+'</p>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        $("#card-section").append(itemToAppend)
    });
}

// document.getElementById('addForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const num1 = document.getElementById('num1').value;
//     const num2 = document.getElementById('num2').value;

//     fetch(`/add?num1=${num1}&num2=${num2}`)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('result').innerText = data;
//         })
//         .catch(error => {
//             document.getElementById('result').innerText = 'Error: ' + error;
//         });
// });

// const addThose = () => {
//     var sum = num1 + num2;

//     alert(`The sum of ${num1} and ${num2} is ${sum}`);
// }

$(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    // $('#addButton').click(() => {
    //     addThose();
    // })
    addCards(cardList);
    $('.modal').modal();
    $('#clickMeButton').click(() => {
        $('#modal1').modal('open');
    })
});