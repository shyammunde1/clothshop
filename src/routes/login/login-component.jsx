import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const LogIn=()=>{

    const loginGoogleUser=async () =>{
        const {user}= await signInWithGooglePopup()
        // console.log(response)
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Log In Page</h1>
            <button onClick={loginGoogleUser}>
                sing in with popup
            </button>
        </div>
    )
}

export default LogIn;