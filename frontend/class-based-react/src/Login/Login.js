import React from "react";
import { withRouter, NavLink } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onLogin = () => {
    this.props.history.push("/otp");
  };
  render() {
    const login_failure_reason = "<reason>";
    return (
      <div className="w-[76%] h-[450px] sm:h-fit sm:w-96 bg-white font-sans flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-lg pl-7 ml-7 sm:p-8 pt-0 sm:border-custom-blue-dark sm:border sm:shadow-2xl sm:shadow-custom-blue/20 border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
        <div className=" text-2xl font-semibold ">Login to JMessenger</div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2 ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className=" font-sans text-base p-2 sm:rounded-lg border-[1px] border-solid border-gray-300 focus:outline-custom-blue "
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            className="font-sans text-base p-2 sm:rounded-lg border-[1px] border-gray-300 border-solid focus:outline-custom-blue"
          />
        </div>

        {/*This is Remember me and Forgot password div*/}
        <div className="flex justify-between w-full">
          {/**/}
          <div className="flex justify-between ">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-[10px] size-4"
            />
            <label htmlFor="remember-me" className=" text-gray-500">
              Remember me
            </label>
          </div>

          <div>
            <a
              className=" no-underline hover:underline text-custom-blue"
              href=" link "
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={this.onLogin}
            className="active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-lg w-full font-sans text-base font-semibold"
          >
            Log in
          </button>
        </div>
        <div>
          <NavLink
            className=" no-underline hover:underline text-custom-blue"
            to="/register"
          >
            Don't have an account?
          </NavLink>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
