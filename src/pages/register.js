import React from 'react';

 
class SignUp extends React.Component{
    
    render()
    {
        const type='placement';
        if(type==='student')
        {
            return(
                <form>
                    <h1>Register</h1>
                    <label>type</label><select><option>--Select--</option><option>Student</option><option>Administration</option></select>
                    <label>Username:</label><input type="text"/>
                    <label>Password:</label><input type="text"/>
                    <label>Rollno:</label><input type="text"/>
                    <label>Branch:</label><input type="text"/>
                    <label>Stream:</label><input type="text"/>
                    <label>Your Resume:</label><input type="file"></input>
                </form>
            )
        }
        else{
            return(
                <form>
                    <h1>Register</h1>
                    <label>type</label><select><option>--Select--</option><option>Student</option><option>Administration</option></select>
                    <label>Username:</label>
                    <label>Password:</label>
                </form>
            )
            
        }
        
    }

} 
export default SignUp;