document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Simulate successful login
    // You can replace this with your actual login logic
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "user" && password === "pass") {
      // Redirect to the desired page after successful login
      window.location.href = "dashboard.html";
    }

    else if (username === "soumya" && password === "pass") {
      // Redirect to the desired page after successful login
      window.location.href = "dashboard.html";
    }


    else if (username === "piyush" && password === "pass") {
      // Redirect to the desired page after successful login
      window.location.href = "dashboard.html";
    }
    
    else if (username === "subhajit" && password === "pass") {
      // Redirect to the desired page after successful login
      window.location.href = "dashboard.html";
    }

     else {
      // Display login error message
      alert("Invalid Username or Password.Please try again......");
      window.location.href = "login.html";
    }
  });
  