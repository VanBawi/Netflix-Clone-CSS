const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content Item
function selectItem(e) {
  // Add border to current tab
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  // Add show class
  tabContentItem.classList.add('show1');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show1'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));




// const plusIcons = document.querySelector('.fag-content-item');
// const minusIcons = document.querySelector('.fas');
// console.log(minusIcons)
// plusIcons.addEventListener('click', dropDownText);

// function dropDownText(){
//   plusIcons.removeEventListener('click', dropDownText);
//   plusIcons.insertAdjacentHTML("beforeend", 
//   "<hr><h3>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,documentaries, and more on thousands of internet-connected devices.<br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h3>")

// }

// minusIcons.addEventListener('click', removeLastEle)

// function removeLastEle(){
//     plusIcons.removeChild(plusIcons.lastChild);
//     console.log(plusIcons.lastElementChild)
// }

// removeLastEle();