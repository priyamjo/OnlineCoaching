const goToLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    window.location.href = '../authentication/authentication.html?email='+email;
}