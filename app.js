


 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJwRQ_PTOZpoOWFFFQU7BEP8cxTiXehN8",
    authDomain: "digiregister-9b5ca.firebaseapp.com",
    projectId: "digiregister-9b5ca",
    storageBucket: "digiregister-9b5ca.appspot.com",
    messagingSenderId: "833105797650",
    appId: "1:833105797650:web:a695ddb4008f8dc2a92ecb",
    measurementId: "G-6EG3GX6J0L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth();


document.getElementById("register").addEventListener("click", function(e) {
    e.preventDefault();
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});

//----- End

//----- Login code start	  
document.getElementById("loginBtn").addEventListener("click", function(e) {
    e.preventDefault();
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      loginMain.innerText = 'Logut';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
});
//----- End
const loginMain = document.getElementById('login')
//----- Logout code start	  
loginMain.addEventListener("click", function() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        loginMain.innerText = 'Login';
      }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
      });		  		  
});


    


const signupBtn = document.querySelector(".signupBtn")
const loginBtn = document.querySelector(".loginBtn")
const moveBtn = document.querySelector(".moveBtn")
const signup = document.querySelector(".signup")
const login = document.querySelector(".login")
const modalForm = document.querySelector(".modalForm")


loginBtn.addEventListener('click',()=>{
    moveBtn.classList.add('rightBtn')
    login.classList.add('loginForm')
    signup.classList.remove('signupForm')
    moveBtn.innerHTML = "Login"
})

signupBtn.addEventListener('click',()=>{
    moveBtn.classList.remove('rightBtn')
    login.classList.remove('loginForm')
    signup.classList.add('signupForm')
    moveBtn.innerHTML = "Signup"

   
})


// loginMain.addEventListener('click',()=>{

//     if( modalForm.style.display === "none" ){
//         modalForm.style.display = "flex" 
//     }else{
//         modalForm.style.display = "none"
//     }
//  })


