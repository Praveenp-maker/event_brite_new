function login(){
    location.href="login.html";
}

function sign(){
    location.href="signup.html";
}
function signnew(){
    console.log("sigfnnew called");
   var item={
    "uname":document.getElementById("uname").value,
    "email":document.getElementById("email").value,
    "password":document.getElementById("password").value,
   "cpassword":document.getElementById("cpassword").value

   }
   console.log(item);
   $.ajax({
    type: "POST",
    url: "http://localhost:9090/login",
    data: JSON.stringify(item),
    success: function (result) {
        //getAll();
        console.log("sucesss");
        //getnew();
    },
    error: function (result) {
        alert("msg");
    },
});
}


function log(){
    console.log("log called");
    location.href="login.html";
}
function test(){
    console.log("test");
   let str = document.getElementById("password").value;
   let res = document.getElementById("cpassword").value;
 
if(str.value=res.value){
   console.log("password matched");
}
else{
  console.log("password mismatch");
}

}
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validemail(){
    var nameErr = emailErr = true;
    
    console.log("email");
    var email=document.getElementById("email");
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            emailErr = false;
            printError("emailErr", "");
          
        }
    }
}
function validname(){
var name=document.getElementById("uname");
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }}

    function validpass(){
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("cpassword").value;
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        }
    