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

var email=document.getElementById("email");
var password=document.getElementById("pwd");

var btnSignIn = document.getElementById("btnSignIn")

btnSignIn.addEventListener('click',e => {
    var actualEmail = email.value;
    var actualPassword = password.value;
    firebase.auth().signInWithEmailAndPassword(actualEmail,actualPassword)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
})