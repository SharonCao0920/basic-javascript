/* ***********************
       Async/Await
*********************** */
// Simulated user data
const userDataDB = {
    userId1: { name: "John Doe", email: "johndoe@example.com" },
    userId2: { name: "Jane Smith", email: "janesmith@example.com" },
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
  
  // Example usage with async/await and try/catch for error handling
  async function fetchUserData() {
    try {
      const data = await getUserData("userId1");
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
  