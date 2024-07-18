import { User } from "./user_search_modal";
let currentUser = null;

export const fetchUser = (mobileNumber) => {
  return user_search(mobileNumber)
    .then(fetchedUser => {
      currentUser = fetchedUser;
      return currentUser;
      console.log(currentUser);
    })
    .catch(err => {
      console.error('Error fetching user:', err);
      throw err;
    });
};



export const getUser = () => {
  return currentUser;
};