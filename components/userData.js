class userData {
    constructor (Firstname, LastName, email) {
        this.Firstname = Firstname;
        this.LastName = LastName;
        this.email = email;
    }
    toString() {
        return this.Firstname + ', ' + this.LastName + ', ' + this.email;
    }
}

// Firestore data converter
const userConverter = {
    toFirestore: (user) => {
        return {
            first: user.Firstname,
            second: user.LastName,
            email: user.email
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.first, data.second, data.email);
    }
};

export default userData;