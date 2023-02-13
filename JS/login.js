// step-1: Add click event handler with submit button

document.getElementById('btn-sumbit').addEventListener('click', function(){
    
    // step-2: get email address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    

     // step-3: get password inside the input field
     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;
     console.log(email, password);

    //  don't check verify email here
    // step-4: password check
    if (email === 'sumonmondle@gmail.com' && password == '12345') {
        window.location.href = 'bank.html'
    } else {
        alert('Password error')
    }
})


