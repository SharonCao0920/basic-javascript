/* ***********************
    Error Handling
*********************** */

// User data
const userDataDB = {
  userId1: { name: "Sharon Cao", email: "ycao@student.sfbu.edu" },
  userId2: { name: "Hegel Cao", email: "hegel@example.com" },
};

// Function to fetch user data asynchronously using Promises
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId < 0) {
        reject("Invalid user ID"); // Throw an error for negative user IDs
      } else if (userDataDB[userId]) {
        resolve(userDataDB[userId]);
      } else {
        reject("User not found");
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Test: negative user ID
getUserData(-1) // Negative user ID
  .then((data) => {
    console.log("User Data:", data);
  })
  .catch((err) => {
    console.error("Error:", err); // Custom error message for negative user ID
  });
