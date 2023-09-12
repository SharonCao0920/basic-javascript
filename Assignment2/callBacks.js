/* *******************************************************************
                           Callbacks

-- A callback is a function passed as an argument to another function
-- This technique allows a function to call another function
-- A callback function can run after another function has finished

Source: https://www.w3schools.com/js/js_callback.asp

******************************************************************** */

// User data
const userDataDB = {
  userId1: { name: "Sharon Cao", email: "ycao@student.sfbu.edu" },
  userId2: { name: "Hegel Cao", email: "hegel@example.com" },
};
  
  // Function to fetch user data asynchronously
  function getUserData(userId, callback) { // Callback function as an argument
    setTimeout(() => { 
      if (userDataDB[userId]) { // If user data exists
        callback(null, userDataDB[userId]); // Return user data
      } else {
        callback("User not found"); // Return an error message if user data not found
      }
    }, 1000); // Simulating a delay of 1 second
  }
  
  // Callback function to handle user data
  function UserData(err, data) { 
    if (err) { 
      console.error("Error:", err); // if error, print error message
    } else {
      console.log("User Data:", data); // if no error, print user data
    }
  }
  
  // Test
  getUserData("userId1", UserData); // Valid user data with userId1
  getUserData("userId3", UserData); // Invalid user data with userId3
  
