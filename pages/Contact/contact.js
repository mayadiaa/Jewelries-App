 function validation(){
 const form=document.querySelector('form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email').value;
 const messageInput=document.querySelector('#message');
 const errorNodes=document.querySelectorAll('.error');
 const success=document.querySelector('#success');
 const text=document.getElementById('text');
 let pattern =/\S+@\S+\.\S+/;
 
 if(emailInput.match(pattern)){
      form.classList.add('valid');
      form.classList.remove('invalid');
      text.innerHTML="your Email Address in valid";
      text.style.color="#00ff00"
      
 }else{
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML="Please Enter Valid Email Address";
    text.style.color="#ff0000"
 }


 }

 

function sendMessage(){
   if(nameInput && emailInput){
      alert('your message is send');
   }
   else{
      alert('please fill your data');
   }
   
   validation();
}












// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     validateInputs();
// });
// const validateInputs=()=>{
// const nameInputValue=nameInput.value.trim();
// const emailInputValue=emailInput.value.trim();
// }
















//  function validateform(){
//     clearMessage();
//   if (nameInput.value.length<1){
//     errorNodes[0].innertext ="Name cannot be blank";
//     nameInput.classList.add("error-border");
//   }
//   if(!emailIsValid(email.value)){
//     errorNodes[1].innertext ="Name cannot be blank";
//     email.classList.add("error-border");
//   }
//  }
//  function clearMessage(){
//     for (let index = 0; index < errorNodes.length; index++) {
//        errorNodes[index].innertext="";
        
//     }
//     nameInput.classList.remove('error-border');
//  }
//  function emailIsValid(email){
//     let pattern =/\S+@\S+\.\S+/;
//     return pattern.test(email);
//  }