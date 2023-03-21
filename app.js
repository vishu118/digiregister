// const loginPop = document.getElementById('loginPop')
// const loginbtn = document.getElementById('login')

// loginbtn.addEventListener('click',()=>{
//    loginPop.style.display = "none" ? loginPop.style.display = "block":loginPop.style.display="none"
// })

const signupBtn = document.querySelector(".signupBtn")
const loginBtn = document.querySelector(".loginBtn")
const moveBtn = document.querySelector(".moveBtn")


loginBtn.addEventListener('click',()=>{
    moveBtn.classList.add('rightBtn')
})

signupBtn.addEventListener('click',()=>{
    moveBtn.classList.remove('rightBtn')
})

