
// openMenu = (e) => {
//   console.log('opening menu');
//   const overlay = document.getElementsByClassName('overlay');
//   overlay.style.display = 'block';
//   const menu = e.target.getElementByClassName('page-menu-open');
//   menu.style.display = 'flex';
// }


// const menuItems = document.getElementsByClassName('menu-item');
// console.log(menuItems);
// for (let i = 0; i < menuItems; i++) {
  //   menuItems[i].addEventListener('click', test);
  // }

  let isOpened;
  
  toggleMenu = () => {
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('open');
  if (isOpened) {
    isOpened = false;
    overlay.style.display = 'none';
    menu.style.display = 'none';
  } else {
    isOpened = true;
    overlay.style.display = 'block';
    menu.style.display = 'flex';
  }
  }

const menuItem = document.getElementById('test');
menuItem.addEventListener('click', toggleMenu);
