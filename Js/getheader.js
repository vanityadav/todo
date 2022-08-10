const buttons = Array.from(document.getElementsByClassName('btn-header'))
buttons.forEach(element => {element.addEventListener("click", getheader)});

function getheader() {
    const oldBody = document.getElementById('changebody')
    oldBody.remove()
    const mainbox = document.getElementById('mainbody')
    mainbox.innerHTML = `
    <div id="changebody">
        <div class="mainbox-left">
          <p class="homepagetext">
            ToDo gives you<br />
            focus from<br />
            work to play.
          </p>
          <p class="download-text">Available on</p>
          <div class="download-logos">
            <button class="download-app-button">
              <img src="Images/appstore.svg" />
            </button>
            <button class="download-app-button">
              <img src="Images/windowsstore.svg" />
            </button>
            <button class="download-app-button">
              <img src="Images/playstore.svg" />
            </button>
          </div>
        </div>
      
      </div>
    `

}




