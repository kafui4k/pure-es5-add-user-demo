

var myDatabase = [
    {
        name: 'James Burton',
        email: 'jamesjames@gmail.com',
        age: 22
    },
    {
        name: 'Derick JoJo',
        email: 'giderick@gmail.com',
        age: 34
    },
    {
        name: 'Akila Burton',
        email: 'akilab@gmail.com',
        age: 56
    }
];

(function Avatars(db){

    var init = function () {
        generateList();
        enterUser();
    }

    var generateList = function () {

        var parent = document.querySelector('#parent_avatars');
        var template ='';
        
        for (var i =0; i < db.length; i++) {
            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="'+i+'">X</div>';
            template += '<div class="card-body">';
            template += '<h3 class="card-title">'+ db[i].name +'</h3>';
            template += '<p class="card-text">';
            template += '<strong>Email</strong>:<span>' + db[i].email +'</span>';
            template += '</p>';
            template += '<p class="card-text">';
            template += '<strong>Age</strong>:<span>' + db[i].age +'</span>';
            template += '</p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';
        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);

        deleteCard();

    }

    var enterUser = function () {

        function grabUser() {
            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            var elements = [name, email, age];
            
            if (validateUser(elements)) {
                // add the card
                document.querySelector('#myForm').reset();
                db.push({name:name, email:email, age:age});
                generateList();

            } else {
                // display error log
                document.querySelector('#error').style.display = 'block';

                setTimeout(function(){
                    document.querySelector('#error').style.display = 'none';
                }, 2000);
            }
        }


        document.querySelector('#myForm').addEventListener("submit", function (event) {
            event.preventDefault();

            grabUser();
        })
    }

    var validateUser = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] == "") {
                return false
            }
        }
        return true
    }

    var deleteCard = function () {
        var buttons = document.querySelectorAll('.card-delete');

        function deleteThis(element) {
            var obj = parseInt(element.getAttribute('data-card'));

            db.splice(obj, 1);

            generateList();
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                deleteThis(this);
            });
            
        }
    }

    init();


})(myDatabase)