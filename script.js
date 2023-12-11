let userid;
let password;
let a,b;
let count = 1;
function verify(){
    a = prompt("Name : ", "");
    b = prompt("Password : ", "");
}
if(count == 1){
    verify();
    count = 0;
}

if(a == "appmnit" && b == "pwd8985@"){
    document.getElementById("submitbutton").onclick = function(){
        userid = document.getElementById("userid").value;
        password = document.getElementById("userpassword").value;
    
        if(userid == "2023UCP1701" && password == "12345"){
            window.alert("Login successfull ! ! !")
            window.location.replace("https://www.mnit.ac.in/");
        }
        else{
            window.alert("login unsuccessfull")
            window.location.replace("http://127.0.0.1:5500/Project%201/index.html");
        }
    }
}
else{
    window.alert("Incorrect username or password");
    window.location.assign("http://127.0.0.1:5500/Project%201/index.html");
}
