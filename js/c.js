var temp = 3;

function valuee(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if( username == "admin" && password == "admin"){
        window.location = "admin.html";
        return false; 
    }
    if(username == "user" && password == "user"){
        window.location = "user-index.html";
        return false;
    }
}
