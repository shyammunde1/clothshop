import { useState } from "react";
import { createAuthUserwithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import './sign-up-form-component.scss'
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;
    


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('retry to set your password .password do not match')
            return
        }

        try {
            const { user } = await createAuthUserwithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            } else {
                console.log('user cretaion encounter error', error)
            }

        }
    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>sign up with your Email and Password</span>
            <form action="" onSubmit={handleSubmitForm}>
                <FormInput label='Display Name' type="text" name="displayName" onChange={handlechange} value={displayName} required />

                <FormInput label="Email" type="email" name="email" onChange={handlechange} value={email} required />

                <FormInput label="Password" type="password" name="password" onChange={handlechange} value={password} required />

                <FormInput label="confirm Password" type="password" name="confirmPassword" onChange={handlechange} value={confirmPassword} required />

                <Button buttonType='' type="submit"> Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;