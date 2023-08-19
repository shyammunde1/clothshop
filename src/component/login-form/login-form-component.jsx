import { useState } from "react";
import {
  LoginwithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./login-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await LoginwithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("try again password wrong");
          break;
        case "auth/user-not-found":
          alert("user Email not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response)
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="login-container">
      <h2>Already have an account?</h2>
      <span>Login with Email and Password</span>
      <form action="" onSubmit={handleSubmitForm}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handlechange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handlechange}
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type="submit">LOGIN</Button>
          <Button type="button" buttonType="google" onClick={loginGoogleUser}>
            Google Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
