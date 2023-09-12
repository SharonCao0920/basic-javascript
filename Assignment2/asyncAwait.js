/* ****************************************
             Async/Await
- async makes a function return a Promise
- await makes a function wait for a Promise

Source: https://javascript.info/async-await
***************************************** */

// User data
const userDataDB = {
  userId1: { name: "Sharon Cao", email: "ycao@student.sfbu.edu" },
  userId2: { name: "Hegel Cao", email: "hegel@example.com" },
};
  
// Function to fetch user data asynchronously using async/await
async function getUserData(userId) {
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

// async/await and try/catch for error handling
async function fetchUserData() {
  try {
    const data = await getUserData("userId1"); // Valid user ID
    console.log("User Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

async function fetchInvalidUserData() {
  try {
    const data = await getUserData(-1); // Negative user ID
    console.log("User Data:", data);
  } catch (err) {
    console.error("Error:", err); // Custom error message for negative user ID
  }
}

// Call the async functions
fetchUserData();
fetchInvalidUserData();
