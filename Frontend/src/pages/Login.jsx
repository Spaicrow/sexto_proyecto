import React from 'react'

const Login = () => {
  return (
    <section>
      <div>
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          
        </div>
        
        <button>Continue</button>
        <p>Already have an acount? <span>Login</span></p>
      </div>

    </section>
  )
}

export default Login
