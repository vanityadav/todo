// const buttons = Array.from(document.getElementsByClassName('btn-header'))
// buttons.forEach(element => {element.addEventListener("click", getheader)});

// function getheader() {
//     const oldBody = document.getElementById('changebody')
//     oldBody.remove()
//     const mainbox = document.getElementById('mainbody')
//     mainbox.innerHTML = `
//     <div id="changebody">
//         <div class="mainbox-left">
//           <p class="homepagetext">
//             ToDo gives you<br />
//             focus from<br />
//             work to play.
//           </p>
//           <p class="download-text">Available on</p>
//           <div class="download-logos">
//             <button class="download-app-button">
//               <img src="Images/appstore.svg" />
//             </button>
//             <button class="download-app-button">
//               <img src="Images/windowsstore.svg" />
//             </button>
//             <button class="download-app-button">
//               <img src="Images/playstore.svg" />
//             </button>
//           </div>
//         </div>
      
//       </div>
//     `

// }


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



