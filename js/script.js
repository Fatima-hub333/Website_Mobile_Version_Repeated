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
