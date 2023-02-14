import React, { useState } from  'react';
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirm };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        e.target.value.length < 2 ?
        setFirstNameError ("First Name must be at least 2 characters") : 
        setFirstNameError("");
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        e.target.value.length < 2 ?
        setLastNameError ("Last Name must be at least 2 characters") : 
        setLastNameError("");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5 ?
        setEmailError ("Email must be at least 5 characters") : 
        setEmailError("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8 ?
        setPasswordError ("Password must be at least 8 characters") :
        setPasswordError(""); 
    }

    const handleConfirmPassword = (e) => {
        setConfirm(e.target.value);
        e.target.value !== password ?
        setConfirmError("Password must match Confirm Password") :
        setConfirmError("");
    }

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p>{firstNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="email" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
                {
                    confirmError ?
                    <p>{confirmError}</p> :
                    ''
                }
            </div>
            {
                firstNameError || lastNameError || emailError || passwordError || confirmError ?
                <input type="submit" value="Create User" disabled/> :
                <input type="submit" value="Create User"/>
            }
        </form>
    );
};
    
export default UserForm;
