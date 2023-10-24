
const selected =  document.getElementById("options");
selected.addEventListener('click',changeSelected);

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
      
    }
    
    // Attach the click event handler to each <li> element
    listItems.forEach(function(item) {
      item.addEventListener('click', handleItemClick);
    });
}