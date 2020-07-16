import React, {useState} from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './App.css';

function App() {
  const [showSignUp, setSignUp] = useState(true)
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = () => {
    const validatedFirstName = firstName.length > 0;
    const validatedEmail = email.length > 0;
    const validatedPassword = password.length > 0;
    return validatedFirstName && validatedEmail && validatedPassword;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSignUp(false);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="loginArea">
      { showSignUp && <div className="loginCard">
          <div className="loginHeader">
            <h2 className="headingLine1">Let's</h2>
            <h1 className="headingLine2"><b>Sign Up</b></h1>
          </div>
          <div className="description">
            <p>Use the form below to signup for this super awesome <br />service. You're only a few steps away!</p>
          </div>
          <div>
            <form>
              <FormGroup controlId="firstName" bsSize="large">
                <div className="nameLabel">
                  <label><b>First Name</b></label><br />
                </div>
                <div className="field">
                  <FormControl
                    autoFocus
                    type="firstName"
                    className="inputField"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup controlId="emailAddress" bsSize="large">
                <div className="nameLabel">
                  <label><b>Email</b></label><br />
                </div>
                <div className="field">
                  <FormControl
                    autoFocus
                    type="email"
                    className="inputField"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <div className="nameLabel">
                  <label><b>Password</b></label><br />
                </div> 
                <div className="field"> 
                  <FormControl
                    autoFocus
                    type="password"
                    className="inputField"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>  
              </FormGroup>
              <div className="submitLabel">
                <Button block bsSize="large" type="submit" disabled={!validateForm()} className="submitButton" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </div>
              {/* <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
              </Button> */}
            </form>
          </div>
        </div>}
        { !showSignUp && <div className="signInCard">
            <div className="loginHeader">
              <h1 className="welcomeHeading"><b>Welcome,</b></h1>
              <h1 className="welcomeHeading"><b>{firstName}!</b></h1>
            </div>
            <div className="description">
              <p>You have been registered for this awesome service. <br />Please check your email listed below for instructions.</p>
            </div>
            <div className="description">
              <b>{email}</b>
            </div>
            <div className="submitLabel">
                <Button block bsSize="large" className="submitButton">
                  Sign In
                </Button>
              </div>
          </div>}
      </div>     
    </div>
  );
}

export default App;


