export const checkValidData = (email, password) => {
    // Regular expression to check for a valid email format
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
  
    // Regular expression to check for a valid password format:
    // - At least one uppercase letter
    // - At least one lowercase letter
    // - At least one digit
    // - Minimum 8 characters
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    // Create an array to collect error messages
    let errorMessages = [];
  
    // Add specific error messages for invalid email and password
    if (!isEmailValid) errorMessages.push("Email ID is not valid");
    if (!isPasswordValid)
      errorMessages.push(
        "Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number."
      );
  
    // If there are errors in both email and password
    if (errorMessages.length === 2) {
      return "Both email and password are invalid.";
    }
  
    // If either one is invalid, return the specific error message(s)
    if (errorMessages.length > 0) {
      return errorMessages.join(" ");
    }
  
    // Return success message if both email and password are valid
    // return "Both email and password are valid.";
    return null;
  };
  