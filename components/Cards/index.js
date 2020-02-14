// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function Article (dataObj) {
    const articleCard = document.createElement('div'),
          headLine = document.createElement('div'),
          authorContainer = document.createElement('div'),
          imgContainer = document.createElement('div'),
          authImg = document.createElement('img'),
          articleBy = document.createElement('span');
    
    articleCard.appendChild(headLine);
    articleCard.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    authorContainer.appendChild(articleBy);
    imgContainer.appendChild(authImg);
    
    articleCard.classList.add('card');
    headLine.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    headLine.textContent = dataObj.headline;
    authImg.src = dataObj.authorPhoto;
    articleBy.textContent = dataObj.authorName;
    
    return articleCard;
}
// console.log(Article())
const articleEntry = document.querySelector('.cards-container')
// ===== Below is refactored code using .values and a nested forEach ===== //
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (response => {
    // console.log(response.data.articles)
    const articleObj = response.data.articles;
    const articleArray = Object.values(articleObj);
    // console.log(articleArray);
    // loop through keys of articles
    articleArray.forEach(articleData => {
        articleData.forEach(article => {
            articleEntry.append(Article(article))
        })
        
    })
    // For each key get list of articles iterate through array of object

    // ====== The below code will not break ===== //
    // response.data.articles.javascript.forEach(article => {
    //     articleEntry.prepend(Article(article))
    // })
    // response.data.articles.bootstrap.forEach(article => {
    //     articleEntry.append(Article(article))
    // })
    // response.data.articles.technology.forEach(article => {
    //     articleEntry.append(Article(article))
    // })
    // response.data.articles.jquery.forEach(article => {
    //     articleEntry.append(Article(article))
    // })
    // response.data.articles.node.forEach(article => {
    //     articleEntry.append(Article(article))
    // })
    // javaScript.push(response.data.articles.javascript);
})
// console.log(javaScript)
