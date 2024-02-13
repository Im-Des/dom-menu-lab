// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML ='<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

    //const topMenuEl = document.querySelector('#top-menu');          WHY DOESNT IT WORK ASK Q
    const topMenuEl = document.getElementById('top-menu');
//Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
    //topMenuEl.style.height = '100%'

//Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

        topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.

    topMenuEl.classList.add('flex-around');
/*
    Task 3.1
Iterate over the entire menuLinks array and for each "link" object:

Create an <a> element.

On the new element, add an href attribute with its value set to the href property of the "link" object.

Set the new element's content to the value of the text property of the "link" object.

Append the new element to the topMenuEl element.
*/
menuLinks.forEach(function(link){
    const aEl = document.createElement('a');
    aEl.setAttribute('href', 'link.href');
    aEl.innerText = link.text;
    topMenuEl.appendChild(aEl);
});


//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById('sub-menu');

//Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

//Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add('flex-around');

//Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = '0';

//Task 5.0
//Replace the menuLinks array in script.js with this version that adds sub-menu data:
    //DONE
//Task 5.1
// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

// Declare a global showingSubMenu variable and initialize it to false;

const topMenuLinks = document.querySelectorAll('#top-menu a');

let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// 👀 Hint: DOM elements have a tagName property.

// console.log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    link.classList.add('active');
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    if (link.classList.contains('active')) {
        link.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
      }
      if (showingSubMenu) {
        buildSubMenu(linkData.subLinks);
        subMenuEl.style.top = '100%';
      } else {
        subMenuEl.style.top = '0';
        mainEl.innerHTML = '<h1>about</h1>';
      }
      const linkData = menuLinks.find(function(linkObj) {
        return linkObj.text === link.textContent;
      });
      showingSubMenu = 'subLinks' in linkData;
    });

//   Next in the event listener, if the clicked <a> link has a class of active:

//Task 5.3
// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return; from the event listener function.

// Task 5.4
// At this point, a new menu item has been clicked and it's time to "reset" any currently active menu item...

// Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
});
//task 5.5
//Next, the event listener should add a class name of active to the <a> element that was clicked.

// link.classList.add('active');

//task 5.6
//Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element's "link" object 
//within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
//// Task 5.7 add sub menu event listener
  //task 5.8
// Code the buildSubMenu function so that it:
function buildSubMenu(subLinks) {

    subMenuEl.innerHTML = '';
  
    subLinks.forEach(function (link) {

      const aEl = document.createElement('a');
  
      aEl.setAttribute('href', link.href);
  
      aEl.innerText = link.text;
  
      subMenuEl.appendChild(aEl);
    });
  }

  subMenuEl.addEventListener('click', function (event) {
    // The first line of code should call the event object's preventDefault() method
    event.preventDefault();
  
    // The second line of code should immediately return if the element clicked was not an <a> element
    if (event.target.tagName !== 'A') return;
  
    // console.log the content of the <a> to verify the handler is working
    console.log(event.target.innerText);
  
    // Task 6.1
    // Set showingSubMenu to false
    showingSubMenu = false;
  
    // Set the CSS top property of subMenuEl to 0
    subMenuEl.style.top = '0';
  
    // Task 6.2
    // Remove the class name of active from each <a> element in topMenuLinks
    topMenuLinks.forEach(function (link) {
      link.classList.remove('active');
    });
  
    // Task 6.3
    // Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl
    mainEl.innerHTML = `<h1>${event.target.innerText}</h1>`;
  });
  