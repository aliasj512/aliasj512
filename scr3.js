function subm(){
    let b=document.querySelector('.header');
    let p = document.getElementById("exampleInputPassword1")
    if(p.value == "12345678") 
   {
        document.getElementById('error').innerHTML = 'correct'
        b.innerText="Your information is correct";
        
   }
 else
   {
        document.getElementById('error').innerHTML= 'INCORRECT'
           alert("The information in the form is incorrect")
           b.innerText="Your information is incorrect";
           
    }
 //    {
  //      x.innerHTML = "<h1>Text after login<h1>";
   //   }
    

 }
