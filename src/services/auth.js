import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signUp = ({ firstName, lastName, email, password, phone }) => {
    const auth = getAuth();
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName
            })
            // ...
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}

export const signIn = ({ email, password }, onSuccess, onFaliure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("userSignedInSuccesfully")
            store.user.set({ fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated:true, uid:user.uid })
        if (onSuccess) {
            onSuccess()           
        }
    })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSuccesfully")
            if (onFaliure) {
                onFaliure("Invalid  Email or Password");
            }
        });
}

export const resetPassword = ({ email }, onSuccess, onFaliure) => {
    console.log("dfdsfds")
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
            // email sent
            const user = userCredential.user;
            console.log("resetPasswordEmailHasBeenSent")
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message;
            console.log("passwordDidNotResetCorrectly")
            if (onFaliure) {
                onFaliure("Invalid Email")
            }
        });
}
