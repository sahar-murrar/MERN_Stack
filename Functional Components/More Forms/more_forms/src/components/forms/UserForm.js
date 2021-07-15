import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [fnameError, setfnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passError, setpassError] = useState("");
    const [ConfirmPassword, setConfrimPassword] = useState("");  
    const [matchError, setmatchError] = useState("");

const checkFirstName=(e)=>{
    setFirstname(e.target.value)
    if(e.target.value.length <2){
      setfnameError("First name must be at least 2 characters")
    }
    else{
        setfnameError("")
    }

} 

const checkLastName=(e)=>{
    setLastname(e.target.value)
    if(e.target.value.length <2){
      setlnameError("Last name must be at least 2 characters")
    }
    else{
        setlnameError("")

    }

} 
const checkEmail=(e)=>{
    setEmail(e.target.value)
    if(e.target.value.length <2){
      setemailError("Email must be at least 2 characters")
    }
    else{
        setemailError("")
    }

} 
const checkPassword=(e)=>{
    setPassword(e.target.value)
    if(e.target.value.length <8){
      setpassError("Password must be at least 8 characters")
    }
    else{
        setpassError("")
    }

} 
const matchPassword=(e)=>{
    if(e.target.value !== password){
      setmatchError("Password and Confirm Password must be matched")
    }
    else{
        setmatchError("")
    }

}
    
    return(
        <form>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ checkFirstName } />
                <p>{fnameError}</p>
            </div>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ checkLastName } />
                <p>{lnameError}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ checkEmail } />
                <p>{emailError}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ checkPassword } />
                <p>{passError}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ matchPassword } />
                <p>{matchError}</p>
            </div>
        </form>

    );
};
    
export default UserForm;