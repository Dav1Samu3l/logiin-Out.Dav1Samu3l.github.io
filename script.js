let nameForm = document.querySelector('#name-form')
let welcomeContainer = document.querySelector('#welcome')
let logoutBtn = document.querySelector('#logout')
let body = document.getElementsByTagName('body')


function checkUser() {
    let userName = localStorage.getItem('name')
    if (userName) {
        nameForm.style.display = "none"
        welcomeContainer.style.display = 'block'


        let userNameElement = document.querySelector('#username')
        userNameElement.textContent= userName
    } else {
        nameForm.style.display = "block"
        welcomeContainer.style.display = 'none'

    }
        
    
}





nameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let nameInput = document.querySelector('#name')
    localStorage.setItem("name", nameInput.value)
    nameInput.value = ""

    checkUser()

})

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear('name')
    checkUser()
})

checkUser()