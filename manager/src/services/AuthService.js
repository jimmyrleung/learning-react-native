import firebase from 'firebase';

const signInWithEmailAndPassword = ({ email, password }) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

const createUserWithEmailAndPassword = ({ email, password }) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export default {
    async login({ email, password }) {
        try {
            const user = await signInWithEmailAndPassword({ email, password });
            return user;
        }
        catch (signingInException) {
            console.log("Signing Exception: ", signingInException);
            try {
                const user = await createUserWithEmailAndPassword({ email, password });
                return user;
            }
            catch (createException) {
                console.log("Create Exception: ", createException);
                throw createException;
            }
        }
    }
};