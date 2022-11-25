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