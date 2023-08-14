import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRLr5YL1gXjdk8xqeHdKAfbYsY3-6UadM",
    authDomain: "clothshop-a85a3.firebaseapp.com",
    projectId: "clothshop-a85a3",
    storageBucket: "clothshop-a85a3.appspot.com",
    messagingSenderId: "241797655626",
    appId: "1:241797655626:web:fe515f5344e1c7cafc0ab3"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt })

        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
}