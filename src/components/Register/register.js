import React from "react";

const Register = () => {
  return(
    <div>
      {/* <h2 className="text-3xl text-slate-500 font-bold text-center mt-2">Register</h2> */}
      <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden ">
       <div class="w-full p-6 bg-white border-2 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
            Register
        </h1>
        <form class="space-y-4">
            <div>
                <label class="label">
                    <span class="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" class="w-full input input-bordered" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" class="w-full input input-bordered" />
            </div>
            <a href="#./" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
                <button class="btn btn-block btn-neutral">Login</button>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}


export default Register