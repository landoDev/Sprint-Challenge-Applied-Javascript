// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function Tabs(topic){
    const tabComponent = document.createElement('div');
    tabComponent.textContent = topic;
    tabComponent.classList.add('tab');
    return tabComponent;
  }
//   console.log(Tabs('topic here'))
const topicsEntry = document.querySelector('.topics');
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    response.data.topics.forEach(topic =>{
        topicsEntry.append(Tabs(topic));
    })
//   console.log(response.data.topics)
})