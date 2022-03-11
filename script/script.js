
toggleMenu = (e) => {
  const overlay = document.getElementById('overlay');
  const menuItem = e.target; //button
  const menuId = e.target.id; // menu-item id

  const allOpens = document.getElementsByClassName('menu-open');
  const allItems = document.getElementsByClassName('menu-item');

  const allMenus = [];
  const allMenuItems = [];

  for (let i = 0; i < allOpens.length; i++) {
    let menu = allOpens[i];
    allMenus.push(menu);
  }

  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    allMenuItems.push(item);
  }

  overlay.style.display = 'block';
  menuItem.style.color = 'var(--primary-color)';

  allMenus.map(( menu => menu.style.display = 'none'));
  allMenuItems.map(( item => item.style.color = 'var(--text-color'));

  if (menuId == 'menu-1') {
    allMenus[0].style.display = "flex";
    allMenuItems[0].style.color = 'var(--primary-color)';
  } else if (menuId == 'menu-2') {
    allMenus[1].style.display = "flex";
    allMenuItems[1].style.color = 'var(--primary-color)';
    } else if (menuId == 'menu-3') {
      allMenus[2].style.display = "flex";
      allMenuItems[2].style.color = 'var(--primary-color)';
      } else if (menuId == 'menu-4') {
        allMenus[3].style.display = "flex";
        allMenuItems[3].style.color = 'var(--primary-color)';
      }
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
  document.getElementById('overlay').style.display = 'none';
}

window.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
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
// console.log(contentVideoControls);

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

contentVideoImg.style.display = 'block';
contentVideo.addEventListener('mouseenter', contentVideoMouseEnter);
contentVideo.addEventListener('mouseleave', contentVideoMouseLeave);