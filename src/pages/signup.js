import React from 'react'


const signup = () => {
  return (
    <div className="Page_height">
      <form method="post" action="http://localhost:3000/api/user/">
        <div>
            <label for="Username">Username</label>
            <input type="text" id="Username" name="username"/>
        </div>
        <div>
            <label for="Password">Password</label>
            <input type="text" id="Password" name="password"/>
        </div>
        <div>
            <label for="Email">Email</label>
            <input type="text" id="Email" name="email"/>
        </div>
        <div>
            <label for="PhoneNumber">PhoneNumber</label>
            <input type="text" id="PhoneNumber" name="phone_number"/>
        </div>
        <div>
            <label for="Location">Location</label>
            <input type="text" id="Location" name="location"/>
        </div>
                    
        <div>
          
          <button type="submit" value="submit">Sign Up</button>

        </div>
                    
      </form>
    </div>
  )
}

export default signup
