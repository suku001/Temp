function goto() {
    var uname = document.getElementById("fname").value;
    var upass = document.getElementById("fpass").value;

    if (uname == "King"){
        if (upass == "500"){
            window.location= "./x.html";
            document.getElementById("res").innerHTML="Success";
        }
        else{
            document.getElementById("res").innerHTML="Wrong Password";
        }
    }
    else{
        document.getElementById("res").innerHTML="Wrong User Name";
    }
}

