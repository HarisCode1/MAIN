
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     console.log(x,"help text");
//     if (x.className === "topnav") {
//         console.log(x,"help text if");
//         x.className += " responsive";
//       } else {
//           x.className = "topnav";
//           console.log(x,"help text else");
//     }
//   }
//   function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }
const email = document.getElementById('email');
const password = document.getElementById('psw');
const hidden = document.getElementById('hidden');
console.log(email)
function checkPswrd(){
  if(email.value != "Jameel123@gmail.com"){
   hidden.style.display = "inline"
  }
  alert("Login Complete")
}