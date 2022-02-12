import React from 'react';
import './signup.css';
import logoo from '../../images/icon.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
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


      {/* <!-- Sign up --> */}
      <div className="container col-md-offset-4 sign-up pt-4 ">
        <h1 className='pb-2'>Sign Up</h1>

        <div className="col-sm-12">
          <input type="text" className="form-control mb-3" id="firstname" placeholder="First Name" name="firstname" />
        </div>
        <div className="col-sm-12">
          <input type="text" className="form-control mb-3" id="lastname" placeholder="Last Name" name="lastname" />
        </div>
        <div className="col-sm-12">
          <input type="email" className="form-control mb-3" id="email" placeholder="Email" name="email" />
        </div>
        <div className="col-sm-12">
          <input type="number" className="form-control mb-3" id="mobileno" placeholder="Phone Number" name="mobileno" />
        </div>
        <div className="col-sm-12">
          <input type="password" className="form-control mb-3" id="password" placeholder="Password" name="password" />
        </div>

        <div className="col-sm-12">
          <button className="col-md-4 col-md-offset-4 btn submit-btn mb-3" type="submit"> Submit
          </button>
        </div>

      </div>


      

    </>
  )
};
export default SignUp;