import React from 'react'

const login = () => {
  return (
    <div className="Page_height">
      <form>
        <div>
            <label for="Username">Username</label>
            <input type="text" id="UserName" />
        </div>
        <div>
            <label for="Password">Password</label>
            <input type="text" id="Pasword" />
        </div>
                    
                    
      </form>
    </div>
  )
}

export default login
