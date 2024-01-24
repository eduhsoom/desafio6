 
 
 
 
 const button = document.querySelector('button')

 
 button.addEventListener('click' , buttonClick)
 
 
 
 function photoClick() {
   
   
   
   
   document.querySelector(".screenOne").classList.add("hide")
   document.querySelector(".screenTwo").classList.remove("hide")
   
   
   
  }
  
  
  
 
  function buttonClick(e) {

   document.querySelector(".screenTwo").classList.toggle("hide")
  document.querySelector(".screenOne").classList.toggle("hide")
 }