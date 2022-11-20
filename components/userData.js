class userData {
    constructor (Firstname, LastName, email) {
        this.firstName = Firstname;
        this.lastName = LastName;
        this.email = email;
    }
    toString() {
        return this.firstName + ', ' + this.lastName;
    }
}

// Firestore data converter
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