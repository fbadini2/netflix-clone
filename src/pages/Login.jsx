import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [rememberLogin, SetRemeberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/91375920-3110-4636-833b-b29b3c076b2a/AR-es-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[470px] h-[600px] mx-auto bg-black/70 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Login</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 rounded bg-gray-700"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=> e.target.value}
                ></input>
                <input
                  className="p-3 my-2 rounded bg-gray-700"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e)=> e.target.value}
                  autoComplete="current-password"
                ></input>
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Login
                </button>
                <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input type='checkbox' className='mr-2'checked={rememberLogin} onChange={(e) => SetRemeberLogin(!rememberLogin)}/>Remember me
                </p>
                <p>Need Help?</p>
                </div>
                <p className='my-4'>
                  <span className='text-gray-600 mr-2'>
                    New to Netflix ?
                  </span>
                  <Link to='/signup'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login