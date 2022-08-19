
let myday = document.querySelector('.myday')

myday.addEventListener("click", mydayPage)

function mydayPage() {
  let footer = document.getElementsByClassName('footer-window')
  console.log(footer)
  // document.getElementsByClassName('footer-window').innerHTML =
  // `<div class="links">2022 ToDo Inc.</div>
  //     <div class="links">Security</div>
  //     <div class="links">Privacy</div>
  //     <div class="links">Terms</div>
  //     <div class="socials-myday">
  //       <div class="social-buttons">
  //         <img src="Images/instagram.svg" />
  //       </div>
  //       <div class="social-buttons">
  //         <img src="Images/facebook.svg" />
  //       </div>
  //       <div class="social-buttons">
  //         <img src="Images/twitter.svg" />
  //       </div>
  //       <div class="social-buttons">
  //         <img src="Images/youtube.svg" />
  //       </div>
  //     </div>
  //     <div class="language-button-myday">
  //       <select name="languages" class="language">
  //         <option value="Default">English</option>
  //         <option value="Hindi">Hindi</option>
  //         <option value="Russian">Russian</option>
  //         <option value="Chinese">Chinese</option>
  //         <option value="French">French</option>
  //         <option value="Spanish">Spainish</option>
  //       </select>
  //     </div>
  //     <div class="support-button">
  //       <div class="text-button">Support &amp; Resources</div>
  //       <img class="uparrow" src="Images/uparrow.svg" />
  //     </div>`
}