const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.querySelector('.mobile_menu').style.display = 'block';
});

function closeMenu() {
  document.querySelector('.mobile_menu').style.display = 'none';
}

const closeButton = document.querySelector('.mobile_menu .cross');
closeButton.addEventListener('click', () => {
  closeMenu();
});

document.querySelectorAll('.menu_items li').forEach((menuitem) => {
  menuitem.addEventListener('click', () => {
    closeMenu();
  });
});


// Popup window JS
const popupWindow = document.getElementById('popup-window');
const buttonProject = document.querySelectorAll('.buttonproject');
const popupExitButton = document.getElementById('popup-exitbtn');

popupExitButton.addEventListener('click', () => {
  popupWindow.style.display = 'none';
});

for (let i = 0; i < buttonProject.length; i++) {
  buttonProject[i].addEventListener('click', () => {
    const language = () => {
      let str = '';
      for(let j = 0; j < dataProjects[i].popupLanguages.length; j += 1){
        str += `<li class="langstyle">${dataProjects[i].popupLanguages[j]}</li>`
      }
      return str;
    }

    const showImg = () => {
      let str = '';
      for(let j = 0; j < dataProjects[i].imgShow.length; j += 1){
        str += `<img src="${dataProjects[i].imgShow[j]}" alt="PROJECT1">`
      }
      return str;
    }

    document.getElementById('popup-title').innerHTML = dataProjects[i].projectTitle;
    document.getElementById('languages').innerHTML = language();
    document.getElementById('main-img').src = dataProjects[i].imgShow[0];
    document.getElementById('text').innerHTML = dataProjects[i].pText;
    document.getElementById('project-images').innerHTML = showImg();

    popupWindow.style.top = `${window.scrollY}px`;
    popupWindow.style.display = 'flex';



  });
}