import UserSearch from  './user_search_modal';
import { User } from "./user_search_modal";
export const user_search = async (mobileNumber) => {
    try {
      const response = await fetch('https://prod.utils.buddyloan.in/v2/user_search.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': 'KXT3BVqyt1XkdqqqcAg9cHlVFMFUdv'
        },
        body: `mobile_no=${encodeURIComponent(mobileNumber)}`,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      const user = User.fromJson(json); // Convert JSON response to User object using fromJson method
      console.log('User:', user); // Handle the user object as needed
      return user; // Optionally return user object for further processing
  
    } catch (error) {
      console.error("Error searching user:", error);
      // Check if the error is related to CORS
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        console.error("This might be a CORS issue.");
      }
      throw error; // Rethrow the error to propagate it further if needed
    }
  };
  