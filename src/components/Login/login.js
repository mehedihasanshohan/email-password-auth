import React from "react";

const Login = () => {

  const handleLogin = () => {
    console.log('clicked')
  }

  return(
    <div>
      {/* <h2 className="text-3xl text-center">Login</h2> */}
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden ">
       <div className="w-full p-6 bg-white border-2 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
            Login
        </h1>
        <form className="space-y-4">
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text"  placeholder="Email Address" className="w-full input input-bordered" />
            </div>
            <div>
                <label class="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-bordered" />
            </div>
            <a href="#./" className="text-xs mt-2 text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
                <button onClick={handleLogin} className="btn btn-block btn-neutral">Login</button>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}

export default Login