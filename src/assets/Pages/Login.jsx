import React from 'react'

function Login({handleLoginSubmit}) {
  return (
    <>

      <div className="container" style={{fontSize:'18px'}}>
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <div className="login-card">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="mt-3 text-center">
                  <a href="#">Forgot Password?</a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login
