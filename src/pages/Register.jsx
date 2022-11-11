import React from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";

const Register = () => {
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form className="absolute inset-[2px] rounded-[8px] bg-[#28292d] z-[10] form flex flex-col p-20">
          <h2 className="text-[#ff4b45] text-2xl font-[500] text-center tracking-[0.1em]">
            Sign Up
          </h2>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="text"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              First Name
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
          </div>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="text"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              Last Name
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
          </div>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="email"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              Email
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
          </div>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="password"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              Password
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
          </div>
          <input
            className="border-none outline-none bg-[#ff4b45] custom-input w-[100px] mt-[10px] rounded-[4px] font-[600] cursor-pointer"
            type="submit"
            value="Register"
          />
          <button
            className="flex justify-between border-none outline-none bg-[#ff4b45] custom-input w-[300px] mt-[15px] rounded-[4px] font-[600] cursor-pointer"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
