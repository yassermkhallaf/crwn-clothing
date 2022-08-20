import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "y", password: "1" }, console.log(this.state));
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    this.setState({ [name]: value }, console.log(this.state));
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title"> I already have an account</h1>
        <span>Sign in with your email and password.</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITh GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
