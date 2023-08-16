import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../component/sign-up-form/sign-up-form-component'


const LogIn = () => {



    const loginGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        // console.log(response)
        const userDocRef = createUserDocumentFromAuth(user)
    }



    return (
        <div>
            <h1>Log In Page</h1>
            <button onClick={loginGoogleUser}>
                sing in with popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default LogIn;