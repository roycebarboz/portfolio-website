var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbys5P-AXH1h8dCPgy9UtJt_mNDzOelPG_szBsSj85JWLTeUCQlAXHae0UGpGKpzFNrg/exec'
const form = document.forms['submit-to-google-sheet']
const confirmation = document.getElementById('confirmation')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        confirmation.innerHTML = "Contact details sent succesfully!"
        setTimeout(function(){
            confirmation.innerHTML=""
        },2000)
        form.reset() 
      })
      .catch(error => console.error('Error!', error.message))
  })