
const signin = document.querySelector('.signin-button')
const signup = document.querySelector('.signup-button')

const signinModal = document.querySelector('.signin-modal')
const signupModal = document.querySelector('.signup-modal')

const exitbtn = Array.from(document.querySelectorAll('.exit'))

signinModal.addEventListener('submit' , homepageHeader)
signupModal.addEventListener('submit' , homepageHeader)

signin.addEventListener('click', () => { signinModal.showModal() })
signup.addEventListener('click', () => { signupModal.showModal() })


exitbtn.forEach(element => { element.addEventListener('click', closeModal )})

function closeModal(event) {
    let buttonClicked = event.target.parentElement.parentElement
    buttonClicked.close();
}

function homepageHeader() {
  
  document.getElementById('header').innerHTML=` <div class="header-menus logo">
        <img
          class="logosvg"
          src="Images/todologo.svg"
          alt="logo"
          onclick="location.href='index.html'"
          type="button"
        />
        <button class="btn-header">ToDo</button>
      </div>
      <div class="header-menus myday">
        <img class="mydaylogo" src="Images/myday.svg" />
        <button class="btn-header">My Day</button>
      </div>
      <div class="header-menus calender">
        <img class="calenderlogo" src="Images/calander.svg" />
        <button class="btn-header">Calender</button>
      </div>
      <div class="header-menus projects">
        <img class="projectslogo" src="Images/projects.svg" />
        <button class="btn-header">Projects</button>
      </div>
      <div class="empty"></div>
      <div class="searchbar">
        <input
          class="searchbarinput"
          type="text"
          placeholder="Search everywhere......"
        />
        <img class="searchicon" src="Images/searchicon.svg" alt="search icon" />
      </div>
      <div class="username">
        <p id="username">hi, Adam!</p>
        <img class="account-image" src="Images/accountimage.svg" />
        <div class="notificationsbox"></div>
      </div>`
 
}



