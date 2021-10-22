import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";


export const firebaseConfig = initializeApp({
    apiKey: "AIzaSyB5_jhp5c2HCE4Dy5Ibx7T8I_8fPdCbeqI",
    authDomain: "movie-app-59817.firebaseapp.com",
    projectId: "movie-app-59817",
    storageBucket: "movie-app-59817.appspot.com",
    messagingSenderId: "999341964879",
    appId: "1:999341964879:web:22900dfb9350a83d17743a"
});

export const createUser = async (email, password, displayName, history) => {
    try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                history.push('/');

            })

        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const signIn = (email, password, history) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history.push('/');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const userObserver = async (setCurrentUser) => {

    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
        if (user) {

            setCurrentUser(user)
        } else {
            // User is signed out
            setCurrentUser(null)
        }
    });
}

export const userSignOut = () => {
    const auth = getAuth();
    signOut(auth)
}