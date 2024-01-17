document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add backend authentication logic here (check username and password)
    console.log('Login:', username, password);
  });
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    // Add backend user creation logic here
    console.log('Signup:', newUsername, newPassword);
  });
  