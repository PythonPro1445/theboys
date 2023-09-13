
function addUser() {
  var user_name = document.getElementById("user_name").value;
  var password = document.getElementById("password").value;

  var credentials = {
    pranavna: "pranav04",
    jamiez: "jamie",
    aryandi: "aryan",
    aryavh: "aryav",
    krishh: "krish",
    michael_lol: "michaelballs"
    
  };

  if (credentials.hasOwnProperty(user_name) && credentials[user_name] === password) {
    localStorage.setItem("user_name", user_name);
    console.log("Authentication successful!");
  } else {
    localStorage.removeItem("user_name");
    window.location.href = "index.html";
    console.log("Authentication failed!");
    alert("Incorrect Username Or Password")
  }
  var loginButton = document.getElementById("login_button");
  loginButton.classList.add("btn-loading");
  loginButton.disabled = true;

  // Simulate login process
  setTimeout(function () {
    // After successful login
    loginButton.classList.remove("btn-loading");
    loginButton.disabled = false;
    loginButton.textContent = " ";
    loginButton.textContent = "Logged In";
    window.location = "pg2index.html"
  }, 3000);
}

function change_password() {
localStorage.setItem("user_name", user_name);
window.location.href = "changepassword.html";
}

// Request permission to show notifications
Notification.requestPermission().then(function(permission) {
if (permission === "granted") {
  // Create a new notification
  var notification = new Notification("Welcome!", {
    body: "Welcome to The Boys",
    icon: "the-boys.png" // Replace with your own icon URL
  });

  // Handle click event on the notification
  notification.onclick = function() {
    // Perform an action when the notification is clicked
    console.log("Notification clicked!");
  };
}
});

function openForgotPassword() {
  window.location.href = "forgot_password.html";
}


