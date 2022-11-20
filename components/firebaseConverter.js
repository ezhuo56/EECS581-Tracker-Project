import userData from "./userData";

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

export default userConverter;