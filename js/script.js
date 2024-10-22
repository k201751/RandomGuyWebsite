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