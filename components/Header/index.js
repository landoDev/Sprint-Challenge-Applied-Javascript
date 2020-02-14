// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headComponent = document.createElement('div'),
        headDate = document.createElement('span'),
        headTitle = document.createElement('h1'),
        tempDegrees = document.createElement('span');
  
  headComponent.appendChild(headDate);
  headComponent.appendChild(headTitle);
  headComponent.appendChild(tempDegrees);
  
  headDate.textContent = 'SMARCH 28, 2019';
  headTitle.textContent = 'Lambda Times';
  tempDegrees.textContent = '98°';
  
  headComponent.classList.add('header');
  headDate.classList.add('date');
  tempDegrees.classList.add('temp')
  
  return headComponent;

}
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());