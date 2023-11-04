
const selected =  document.getElementById("options");
selected.addEventListener('click',changeSelected);
let content=document.querySelector(".content");
//let filter=data.js //********************************** */
function changeSelected(){
    var listItems = document.querySelectorAll('ul li');
    var activeImg=document.querySelectorAll(".content .visible");
    // Define a function to handle the click event
    function handleItemClick(e) {
      e.preventDefault();
      
      // Remove the 'active' class from all <li> elements
      listItems.forEach(function(item) {
        item.classList.remove('active');
        item.addEventListener('click',removeImage(item.id));
      });
      console.log(activeImg);
      activeImg.forEach(function(images){
        console.log("images");
        images.classList.remove('visible');
      })
        
      // Add the 'active' class to the clicked <li> element
      let className=this.id;
      this.classList.add('active');
      // change temp **********************************************************************
      removeImage(className)
      removeContainer()
      renderImages(className)
      //data.js par traverse karo aur this ki active class ko compare kara ke render karao
      //wrapper.addHTML=`<p>`
      
    }
    
    // Attach the click event handler to each <li> element
    listItems.forEach(function(item) {
      item.addEventListener('click', handleItemClick);
    });
}
function removeContainer(){
  let container=document.querySelector(".content-container");
  console.log(container);
  container.remove();
}

function removeImage(idList){
  var activeImg=document.querySelectorAll(`${idList}`);
  activeImg.forEach(function(images){
    console.log("images");
    images.classList.remove('visible');
  })
}


function renderImages(className){
  let wrapper=document.createElement("div");
  wrapper.classList.add("content-container")
  for(let i=1;i<=10;++i){
    let pdImg = document.createElement("img");
    pdImg.classList.add("contentImg");
    pdImg.classList.add("visible");
    pdImg.setAttribute("id",`${className}`);
    pdImg.src=`./elements/sketchElements/${className}/${i}.png`
    wrapper.appendChild(pdImg);
  }
  content.appendChild(wrapper);
  console.log(className);
}



window.onload= function(){
let wrapper=document.createElement("div");
      wrapper.classList.add("content-container")
      for(let i=1;i<=10;++i){
        let pdImg = document.createElement("img");
        pdImg.classList.add("contentImg");
        pdImg.classList.add("visible");
        pdImg.setAttribute("id","head");
        pdImg.src=`./elements/sketchElements/head/${i}.png`
        wrapper.appendChild(pdImg);
      }
      content.appendChild(wrapper);
      //console.log(className);
}