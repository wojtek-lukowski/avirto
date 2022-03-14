localStorage.clear('selectedArray');

toggleMenu = (e) => {

  const overlay = document.getElementById('overlay');
  const menuItem = e.target; //button
  const menuId = e.target.id; // menu-item id

  const allItems = document.getElementsByClassName('menu-item'); //all buttons
  const allOpens = document.getElementsByClassName('menu-open'); //all menus

  const allMenuItems = []; //buttons array
  const allMenuItemIds = []; //buttons id array
  const allMenus = []; //id's array
  const allIds = []; //id's array

  let isSelected = []; //is selected array

  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    allMenuItems.push(item);
  } //button array elements

  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    allMenuItemIds.push(item.id);
  } //button id array elements - needed to establish which menu item has been clicked
  
  for (let i = 0; i < allOpens.length; i++) {
    let menu = allOpens[i];
    allMenus.push(menu);
  } //id array elements

  for (let i = 0; i < allOpens.length; i++) {
    let menu = allOpens[i];
    allIds.push(menu.id);
  } //id array elements

  for (let i = 0; i < allOpens.length; i++) {
    let item;
    isSelected.push(item);//active boolean state for each item
  }

  overlay.style.display = 'block';
  menuItem.style.color = 'var(--primary-color)';

  allMenus.map(( menu => menu.style.display = 'none'));
  allMenuItems.map(( item => item.style.color = 'var(--text-color'));

  removeSelection = () => {
  for (let i = 0; i < isSelected.length; i++) {
    isSelected[i] = false;
  }
}

  openMenu = (item) => {
    let checkSelected = JSON.parse(localStorage.getItem('selectedArray'));

    if (checkSelected) {
      isSelected = checkSelected;
    }

  if (isSelected[item]) {
    isSelected[item] = false;
     closeMenu();
     localStorage.setItem('selectedArray', JSON.stringify(isSelected));
    //  localStorage.clear('selectedArray');
   } else {
        allMenus[item].style.display = "flex";
        allMenuItems[item].style.color = 'var(--primary-color)';
        removeSelection();
        isSelected[item] = true;
        localStorage.setItem('selectedArray', JSON.stringify(isSelected));
        }
  }

  // establishing which menu item has been clecked and
  // running the opening menu for the current instance
  whichItem = allMenuItemIds.indexOf(menuId);
  openMenu(whichItem);
}

const menuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', toggleMenu);
  };


closeMenu = () => {
  const allOpens = document.getElementsByClassName('menu-open');
  const allMenus = [];
    for (let i = 0; i < allOpens.length; i++) {
    let menu = allOpens[i];
    allMenus.push(menu);
    }
  allMenus.map(( menu => menu.style.display = 'none'));

const allItems = document.getElementsByClassName('menu-item');
const allMenuItems = [];
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    allMenuItems.push(item);
  }
  allMenuItems.map(( item => item.style.color = 'var(--text-color'));
  document.getElementById('menu-first-item').style.color = 'var(--text-color)';
  document.getElementById('overlay').style.display = 'none';
  localStorage.clear('selectedArray');
}

//close menu with Esc key
window.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    localStorage.clear('selectedArray');
    closeMenu();
  }
  });

//header image
const headerImg = document.getElementById('header-image');
removeOverlay = () => {
  headerImg.classList.remove('img-overlay');
}

putOverlay = () => {
  headerImg.classList.add('img-overlay');
}

// headerImg.classList.add('img-overlay');
// headerImg.addEventListener('mouseenter', removeOverlay);
// headerImg.addEventListener('mouseleave', putOverlay);

//3rd element hover
const contentVideo = document.getElementById('content-video');
const contentVideoH = document.getElementById('content-video-h');
const contentVideoImg = document.getElementById('content-video-img');
const contentVideoImgOverlay = document.getElementById('content-video-img-overlay');
const contentVideoControls = document.getElementById('content-video-controls');
const contentVideoArrow = document.getElementById('content-video-arrow');
const contentVideoArrowBlue = document.getElementById('content-video-arrow-blue');

contentVideoMouseEnter = () => {
  contentVideoH.style.color = 'var(--primary-color)';
  contentVideoImgOverlay.style.display = 'none';
  contentVideoControls.style.color = 'var(--primary-color)';
  contentVideoArrow.style.display = 'none';
  contentVideoArrowBlue.style.display = 'inline-block';
}

contentVideoMouseLeave = () => {
  contentVideoH.style.color = 'var(--text-color)';
  contentVideoImgOverlay.style.display = 'block';
  contentVideoControls.style.color = 'var(--text-color)';
  contentVideoArrow.style.display = 'inline-block';
  contentVideoArrowBlue.style.display = 'none';
}

if (window.innerWidth > 375) {
  contentVideoImg.style.display = 'block';
  contentVideo.addEventListener('mouseenter', contentVideoMouseEnter);
  contentVideo.addEventListener('mouseleave', contentVideoMouseLeave);
}

// hover for menu items
hover = (e) => {
const itemHovered = e.target;
itemHovered.style.color = 'var(--primary-color)';
}

removeHover = (e) => {
const itemHovered = e.target;
itemHovered.style.color = 'var(--text-color)';
}

const allItems = document.getElementsByClassName('menu-item');
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  item.addEventListener('mouseenter', hover);
  item.addEventListener('mouseleave', removeHover);
}


