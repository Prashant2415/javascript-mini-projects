function saveUserDetails(){
    const name = document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(name ,email , password);

    const user= {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("userData",JSON.stringify(user));
}