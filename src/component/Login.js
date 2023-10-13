import React from 'react'

function Login() {
  return (
    <section className='login_wrap'>
      <form>
        <div>
          <label>Email address</label> <br/>
          <input type='email' placeholder='Enter email'/>
        </div>
        <div>
          <label>Password</label> <br/>
          <input type='password' placeholder='Password'/>
        </div>
        <button type='submit' className='loginBtn'>Login</button>
      </form>
    </section>
  )
}

export default Login