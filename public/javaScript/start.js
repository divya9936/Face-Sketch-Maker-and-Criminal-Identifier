
const selected =  document.getElementById("options");
selected.addEventListener('click',changeSelected);
let filter=data.js //********************************** */
function changeSelected(){
    var listItems = document.querySelectorAll('ul li');

    // Define a function to handle the click event
    function handleItemClick(e) {
      e.preventDefault();
      
      // Remove the 'active' class from all <li> elements
      listItems.forEach(function(item) {
        item.classList.remove('active');
      });
      
      // Add the 'active' class to the clicked <li> element
      this.classList.add('active');
      // change temp **********************************************************************
      let wrapper=this.createElement("div");
      wrapper.classList.add(".something");
      //data.js par traverse karo aur this ki active class ko compare kara ke render karao
      wrapper.addHTML=`<p>`
      
    }
    
    // Attach the click event handler to each <li> element
    listItems.forEach(function(item) {
      item.addEventListener('click', handleItemClick);
    });
}