import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import './App.css';

function App() {
  const [showSignUp, setSignUp] = useState(true)
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatedFirstName, setValidatedFirstName] = useState();
  const [validatedEmail, setValidatedEmail] = useState();
  const [validatedPassword, setValidatedPassword] = useState();
  const [lengthFirstName, setLengthFirstName] = useState();
  const [lengthEmail, setLengthEmail] = useState();
  const [lengthPassword, setLengthPassword] = useState();
  const FIRSTNAME_REGEX = /^[A-Za-z ,.'-]+$/;
  const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const handleSubmit = (event) => {
    setLengthFirstName(firstName.length > 0);
    setLengthEmail(email.length > 0);
    setLengthPassword(password.length > 0);
    event.preventDefault();
    if((validatedFirstName && lengthFirstName) && (validatedEmail && lengthEmail) && lengthPassword){
      setSignUp(false);
    }
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
                <div className="nameLabel">
                  <label><b>First Name</b></label><br />
                </div>
                <div className="field">
                  <input
                    type="firstName"
                    className="inputField"
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value);
                      setValidatedFirstName(e.target.value.length > 0 && FIRSTNAME_REGEX.test(e.target.value));
                      setLengthFirstName(firstName.length > 0);
                    }}
                    onBlur={e=>setValidatedFirstName(e.target.value.length > 0 && FIRSTNAME_REGEX.test(e.target.value))}
                  />
                  {!validatedFirstName && firstName.length > 0 && <label className="errorLabel">* Please enter valid First Name</label>}
                  {lengthFirstName === false && firstName.length > 0 && <label className="errorLabel">* Please enter First Name</label>}
                </div>
                <div className="nameLabel">
                  <label><b>Email</b></label><br />
                </div>
                <div className="field">
                  <input
                    type="email"
                    className="inputField"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      setValidatedEmail(e.target.value.length > 0 && EMAIL_REGEX.test(e.target.value));
                      setLengthEmail(email.length > 0);
                    }}
                    onBlur={(e)=> setValidatedEmail(e.target.value.length > 0 && EMAIL_REGEX.test(e.target.value))}
                  />
                  {!validatedEmail && email.length > 0 && <label className="errorLabel">* Please enter valid Email</label>}
                  {lengthEmail === false && email.length > 0 && <label className="errorLabel">* Please enter Email</label>}
                </div>
                <div className="nameLabel">
                  <label><b>Password</b></label><br />
                </div> 
                <div className="field"> 
                  <input
                    type="password"
                    className="inputField"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={e=>setValidatedPassword(e.target.value.length > 0)}
                  />
                  {validatedPassword === false && <label className="errorLabel">* Please enter valid Password</label>}
                </div> 
              <div className="submitLabel">
                <Button block bsSize="large" type="submit" className="submitButton" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </div>
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


