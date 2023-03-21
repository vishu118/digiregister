

    

const loginMain = document.getElementById('login')
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


loginMain.addEventListener('click',()=>{
    modalForm.style.display = "flex" 
    // if( modalForm.style.display = "flex" ){
    //     modalForm.style.display = "none" 
    // }
 })


