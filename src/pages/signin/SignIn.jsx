import React from "react";
import LogoImg from "../../assets/logo/logo.svg";
import { SocialIcons } from "../../constants/Constants";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/pagewrapper");
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="bg-customBlue">
          <div className="bg-customBlue pt-16 pl-16 h-screen transform -skew-x-6 w-[110%]">
            <div className="transform skew-x-6">
              <img src={LogoImg} alt="logo" />
              <h1 className="text-center mt-32 ">BASE</h1>
              <div className="flex justify-between w-[40%] mt-[37%] mx-auto">
                {SocialIcons.map((item) => (
                  <div key={item.id}>
                    <img src={item.icon} alt="icons" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle pt-[10%] bg-customWhite">
          <div className="mt-20">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
            <div className="flex items-center gap-5 pt-5 align-middle">
              <button className="flex items-center text-slate-400 bg-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mb-4">
                <img src={GoogleIcon} alt="Google" className="w-6 h-6 mr-2" />
                Sign in with Google
              </button>
              <button
                className="flex items-center text-slate-400 py-2 px-4 bg-white rounded-22xl focus:outline-none focus:shadow-outline"
                style={{ alignSelf: "flex-start" }}
              >
                <img src={AppleIcon} alt="Apple" className="w-6 h-6 mr-2" />
                Sign in with Apple
              </button>
            </div>
            <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mt-10">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 bg-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <CommonButton label="Sign In" onclick={handleNavigation} />
              </div>
              <p className="text-center mt-5 text-gray-400">
                Don’t have an account?{" "}
                <span className="text-customBlue">Register here</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
