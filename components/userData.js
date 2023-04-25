/*
  Name: userData.js
  Description: stores the user data to local app storage
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/19/2022
  Date revised: 1/23/2023
  Preconditions: add in conditions to store user data to database
  Postconditions: Create new user information given from app
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import {getStorage, ref } from "firebase/storage";

//Create a class with data inputted from firebase
class userData {
    constructor (Firstname, LastName, email) {
        this.firstName = Firstname;
        this.lastName = LastName;
        this.email = email;
        this.userImage = '../img/temp.png';
    }

    toString() {
        return this.firstName + ', ' + this.lastName;
    }


}

// Firestore data converter to grab the data and be able to store it to the database
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

export default userData;