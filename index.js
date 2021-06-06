const usernameInput = document.getElementById("usernameInput")

usernameInput.addEventListener("keyup", function(e) {

  let username = e.target.value.toLowerCase()
  let allNamesDOMCollection = document.getElementsByClassName("name")
  
  for( i=0; i<allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase()
    
    if(currentName.includes(username)) {
      allNamesDOMCollection[i].style.display = "block"
    } else {
      allNamesDOMCollection[i].style.display = "none"
    }
  }
})