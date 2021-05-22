var firebaseConfig = {
    apiKey: "AIzaSyCZhAKGxyGLCgk1JUxBM27Xqxe2uHj87Jo",
    authDomain: "ignis-de493.firebaseapp.com",
    databaseURL: "https://ignis-de493-default-rtdb.firebaseio.com",
    projectId: "ignis-de493",
    storageBucket: "ignis-de493.appspot.com",
    messagingSenderId: "2203901067",
    appId: "1:2203901067:web:313c2c6d15b5303341488e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var btnSignUp = document.getElementById("btnSignUp");

btnSignUp.addEventListener('click',e => {
    var name = document.getElementById("name");
    var phoneno = document.getElementById("phoneno");

    var actualName = name.value;
    var actualPhoneNo = phoneno.value;

    firebase.database().ref('/users/' + actualName).set({
        name: actualName,
        phoneno: actualPhoneNo,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })

});


var btnSignIn = document.getElementById("btnSignIn");

btnSignIn.addEventListener('click',e => {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(email,password);
    var actualEmail = email.value;
    var actualPassword = password.value;
    

    firebase.auth().signInWithEmailAndPassword(actualEmail,actualPassword)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        var errorDiv = document.getElementById("error");
        errorDiv.appendChild(errorBlock)
    })
});

var errorBlock = '<div class="alert alert-danger">'+'Something went wrong'+'</div>';