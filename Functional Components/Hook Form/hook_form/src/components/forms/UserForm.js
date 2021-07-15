import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfrimPassword] = useState("");  
    
    
    return(
        <form>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfrimPassword(e.target.value) } />
            </div>

            <p>Your Form Data</p>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </form>

    );
};
    
export default UserForm;