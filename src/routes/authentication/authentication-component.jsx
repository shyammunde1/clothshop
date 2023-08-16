
import SignUpForm from '../../component/sign-up-form/sign-up-form-component'
import LoginForm from "../../component/login-form/login-form-component";

import './authentication.styles.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>           
            <LoginForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;