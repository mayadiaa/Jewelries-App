// let username =document.getElementById("Username");
// // username.value;
// let password =document.getElementById("Password");
// password.value;
// let usernamefromls=localStorage.getItem("username");
// let useremailfromls=localStorage.getItem("useremail");
// let passwordfromls=localStorage.getItem("password");

// function signup(){
//     let useremail =document.getElementById("Email");
// useremail.value;
//     let usernamevl= username.value;
//     let useremailvl= useremail.value;
//     let passwordvl= password.value;
//     if( usernamevl && useremailvl && passwordvl){
//         localStorage.setItem("username",usernamevl);
//         localStorage.setItem("useremail",useremailvl);
//         localStorage.setItem("password",passwordvl);
//        //  donesignup();
//         newDoc();
//      }else{
//        notsignup();
//      }
// };

// function login(){
//     // let useremailvl = useremail.value;
//     let usernamevl= username.value;
//     let passwordvl= password.value;
//       if(usernamevl == usernamefromls && passwordvl == passwordfromls){
//             // home();
//             alert('you are logged in');
           
           
//       }else{
//         // alert('you are logged in');
//         notsignup();
       
//       }
//     };


//     function notsignup(){
//         let donesign=document.querySelector('.eror');
//         donesign.innerHTML =`<br> <b class ="not">fill useremail and password</b>`;
//       }
//       function donesignup(){
//         let donesign=document.querySelector('.eror');
//         donesign.innerHTML +=`<br> <b class="dg">the registration is done</b>`;
//       }
//       function newDoc() {
//         window.location.assign("../login/login.html");
        
//       }
//       function home() {
//         // alert("done")
//         window.location.assign("../about/index.html");
       
//       }
//       function gologin(){
//         window.location.assign("./signup.html");
      
//       }
//       function gosign(){
//         window.location.assign("./login.html");
//       }
      




let username =document.getElementById("Username");
// username.value;s

let password =document.getElementById("Password");
password.value;
let useremailfromls=localStorage.getItem("useremail");
let passwordfromls=localStorage.getItem("password");

function signup(){
    let useremail =document.getElementById("Email");
useremail.value;
    let usernamevl= username.value;
    let useremailvl= useremail.value;
    let passwordvl= password.value;
    if( usernamevl && useremailvl && passwordvl){
        localStorage.setItem("username",usernamevl);
        localStorage.setItem("useremail",useremailvl);
        localStorage.setItem("password",passwordvl);
       
                
        nduc();
     }else{
     alert('please fill your data');
     }
};
function Signin(){
    let usernameVal=username.value;
    let passwordVal=password.value;
    if(usernameVal&&passwordVal){
    if(usernameVal==usernameFromLS&&passwordVal==passwordFromLS){
    //  window.location.assign("../../index.html");
    loginhome();
    }
    }
    else{
        alert('Please enter your data correctly');
    }
}
function nduc(){
     
    setTimeout(function(){
        window.location.assign("../login/login.html");
               },100);
}
function loginhome(){
    setTimeout(function(){
        window.location.assign("../../index.html");
               },100);
}