    document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('div.slides');
    if (slides){
        loginBGchanger();
    }
    function loginBGchanger() {
        setTimeout(() => {
            if (slides) {
                slides.style.backgroundImage = "url('./assets/login/img2.jpg')";
            } else {
                console.error("❌ .slides element not found.");
            }
        }, 5000);
    }

    // Keep your other functions here...
});

    function loadLogin(){
        window.location.href = "./signin.html";
    }
    function matchCredentials(){
        let username = document.getElementsByName('username')[0].value;
        let password = document.getElementsByName('password')[0].value;

        window.location.href = "./dashboard.html";
        alert(username);
        if(username === "admin" && password === "admin"){
            alert();
            
        }
        alert("wrong password!! ");
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
            errorMsg.innerHTML = errorArr.join('<br>');
            // Display errors if any
        } else {
            const signupData = {
                username: document.getElementById('username').value,
                fullName: document.getElementById('fname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };
        
            try {
                // Send data to the server using a POST request
                const response = fetch('mongodb://localhost:27017/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signupData)
                });
        
                const result = response.json();
                if (response.ok) {
                    alert('Signup successful!');
                } else {
                    alert(`Signup failed: ${result.message}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
            errorMsg.innerHTML = "";
        }
    }

    function addbtnclick(){
        document.getElementById("messageBox").style.display = "flex";
        document.getElementById("abdiv").style.zIndex = "3";
        document.getElementById("add-btn-dash").style.zIndex = "3";
    }

    function closeMsgBox(){
        document.getElementById("messageBox").style.display = "none";
    }
    /*
    document.getElementById('signupForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Capture form data
        const signupData = {
            username: document.getElementById('username').value,
            fullName: document.getElementById('fname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            // Send data to the server using a POST request
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Signup successful!');
            } else {
                alert(`Signup failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });*/