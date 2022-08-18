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



signin.addEventListener('click', () => { signinModal.showModal() })
signup.addEventListener('click', () => { signupModal.showModal() })


// const exitbtn = document.querySelector('.exit')
// exitbtn.addEventListener('click', () => { signinModal.close() })

const exitbtn = Array.from(document.querySelectorAll('.exit'))
exitbtn.forEach(element => {
  element.addEventListener('click', function (event) {
    let buttonClicked = event.target
    let buttonClass = buttonClicked.parentElement.parentElement.className
    console.log(buttonClass)
    buttonClass.close();
  })
});

