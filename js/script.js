{
  var displayAll = true;
  var displayMusic = false;
  var displayProgramming = false;
}

function displayedProj(){
  var allProjectButton = document.getElementById("allProject");
  var musicProjectButton = document.getElementById("musicProject");
  var programmingProjectButton = document.getElementById("programmingProject");
  var allProject = document.getElementsByClassName("project-item");
  var musicProject = document.getElementsByClassName("musicProject");
  var programmingProject = document.getElementsByClassName("programmingProject");

  if(!allProjectButton.classList.contains("all-project-on") && displayAll === true){
    allProjectButton.classList.toggle("all-project-on");
    for (i = 0; i < allProject.length; i++) {
      allProject[i].style.display = "flex";
    }
  } else if(allProjectButton.classList.contains("all-project-on") && displayAll != true){
    allProjectButton.classList.toggle("all-project-on");
  }

  if(displayMusic === true){
    musicProjectButton.classList.toggle("music-project-on");
    for (l = 0; l < allProject.length; l++) {
      allProject[l].style.display = "none";
    }

    for (i = 0; i < musicProject.length; i++) {
      musicProject[i].style.display = "flex";
    }
  } else if(musicProjectButton.classList.contains("music-project-on") || displayMusic === true) {
    musicProjectButton.classList.toggle("music-project-on");
    for (i = 0; i < allProject.length; i++) {
      allProject[i].style.display = "flex";
    }
  }

  if(displayProgramming === true){
    programmingProjectButton.classList.toggle("programming-project-on");
    for (i = 0; i < allProject.length; i++) {
      allProject[i].style.display = "none";
    }

    for (i = 0; i < programmingProject.length; i++) {
      programmingProject[i].style.display = "flex";
    }

  } else if(programmingProjectButton.classList.contains("programming-project-on") || displayProgramming === true){
    programmingProjectButton.classList.toggle("programming-project-on");
    for (i = 0; i < allProject.length; i++) {
      allProject[i].style.display = "flex";
    }
  }
}

function shuffleContents(){
  var ul = document.querySelector('.content-body-projects');
  for(var i = ul.children.length; i >= 0; i--){
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

function navHome() {
  event.preventDefault();
  displayAll = true;
  displayMusic = false;
  displayProgramming = false;
  displayedProj();
}

function navMusic() {
  event.preventDefault();
  if(displayMusic === false){
    displayMusic = true;
    displayAll = false;
    displayProgramming = false;
  } else {
    displayMusic = false;
    displayAll = true;
  }
  displayProgramming = false;

  displayedProj();
}

function navProgramming() {
  event.preventDefault();
  if(displayProgramming === false){
    displayProgramming = true;
    displayAll = false;
    displayMusic = false;
  } else {
    displayProgramming = false;
    displayAll = true;
  }
  displayMusic = false;

  displayedProj();
}

function navResume() {
  event.preventDefault();
  //document.getElementById("bodyColor").style.backgroundColor = "var(--background-color)";
}
