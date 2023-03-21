// const loginPop = document.getElementById('loginPop')
// const loginbtn = document.getElementById('login')

// loginbtn.addEventListener('click',()=>{
//    loginPop.style.display = "none" ? loginPop.style.display = "block":loginPop.style.display="none"
// })

const signupBtn = document.querySelector(".signupBtn")
const loginBtn = document.querySelector(".loginBtn")
const moveBtn = document.querySelector(".moveBtn")
const signup = document.querySelector(".signup")
const login = document.querySelector(".login")


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



