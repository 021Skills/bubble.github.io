function validate() {
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

    if (Username == "admin" && Password == "admin") {
        alert("Successful Login");
        return false;
    } else {
        alert("Wrong Password Or Username");
    }

}

