var slides = document.getElementsByClassName('slides')
loginBGchanger()
function loginBGchanger(){
    setTimeout(resolve, 5000);
    slides.style.backgroundImage = "url('./assets/login/img2.jpg')";
}
function loadLogin(){
    window.location.href = "./signin.html";
}
function loadSignup(){
    window.location.href = "./signup.html";
}
function checkSignupCredentials(){
    let username = document.getElementsByName('username')[0]; 
    let password = document.getElementsByName('password')[0];
    let confirmPassword = document.getElementsByName('rpassword')[0];
    let fname = document.getElementsByName('fname')[0]; 
    let email = document.getElementsByName('email')[0];  
    let errorArr = [];
    let errorMsg = document.getElementById('error');

    let usernameRegex = /^[a-zA-Z0-9_.]+$/;
    let emailRegex = /^[a-zA-Z0-9_.]+@[a-z0-9]+.[a-z]+$/;
    let fnameRegex = /^[a-zA-Z ]+$/;

    if (!fnameRegex.test(fname.value)) {
        errorArr.push('Name contain invalid characters, only letters are allowed.');
    }
    if (!emailRegex.test(email.value)) {
        errorArr.push('Invalid Email!');
    }
    if (!usernameRegex.test(username.value)) {
        errorArr.push('Username contains invalid characters! Only letters, numbers, and underscores are allowed.');
    }

    if(password.value !== confirmPassword.value){
        errorArr.push('Passwords do not match!');
    }

    if(password.value.length < 8){
        errorArr.push('Password should atleast be 8 characters.')
    }
    
    if(errorArr.length > 0){
        errorMsg.innerHTML = errorArr.join('\n');
         // Display errors if any
    } else {
        errorMsg.innerHTML = "";
        alert("Passwords match!");
    }
}