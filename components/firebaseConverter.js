/*
  Name: firebaseConverter.js
  Description: convert information from app to Firebase database
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/19/2022
  Date revised: 1/23/2023
  Preconditions: Importing userdata
  Postconditions: Create new user information given from app
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import userData from "./userData";

//Firestore User Data Converter
const userConverter = {
    toFirestore: (user) => {
        return {
            first: user.firstName,
            second: user.lastName,
            email: user.email
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new userData(data.first, data.second, data.email);
    }
};
export default userConverter;