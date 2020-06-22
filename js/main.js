

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

    }

    var enterUser = function () {
        console.log('form')
    }

    init();

})(myDatabase)