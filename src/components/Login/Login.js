import React from 'react';
import './login.css';
import logoo from '../../images/icon.png';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <header className="fixed fixed-top">
        <div className="navbar-div">
          <nav className="navbar navbar-light">
            {/* <!-- Brand --> */}
            <Link to='./'>
              <a className="navbar-brand ml-5" href="#">

                <img src={logoo} alt="" />

              </a>
            </Link>
            <div className='navbar-btns'>
              {/* <!-- Login/Signup --> */}
              {/* <div className='login-signup mr-2'>
                                <Link to='./login'>
                                    <button className='btn login-signup-btn px-4 py-2 mt-3'>
                                        Login/Signup
                                    </button>
                                </Link>
                            </div> */}

              {/* <!-- Join Us --> */}
              <div className='join-btn my-3'>
                <Link to='./joinus'>
                  <button className='btn join-us-btn px-5 py-2 mr-2'>Join us!</button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* <!-- Sign in --> */}
      <div className="container col-md-offset-4 login">
        <h1 className='signin-heading'>Login</h1>

        <div className="col-sm-12 pt-5">
          <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
        </div>
        <div className="col-sm-12 pt-5">
          <input type="password" className="form-control" id="password" placeholder="Password" name="password" required />
        </div>

        <div className="col-sm-12 pt-3 pb-4 text-left">
          <input type="checkbox" id="Remember" name="Remember" value="Remember" className='text-left' />
          <label for="Remember" className='pl-1'>Remember me</label>
        </div>
        <div className="col-sm-12">
          <button className="btn col-md-4 col-md-offset-4 btn login-btn mt-2" type="submit"> Submit
          </button>
        </div>
        <br></br>

        <Link to='./signup'>
          <div className="col-sm-12">

            New User? Sign Up Here

          </div>
        </Link>

      </div>


      {/* </div>
            </div> */}
    </>
  )
};
export default Login;