import React from "react";
import { withRouter } from "react-router-dom";

class EmailVerification extends React.Component {
  verifyClicked = () => {
    alert("Now you will be redirected to Chat interface");
    this.props.history.replace("/chat");
  };
  render() {
    const email = "mail@sanskarbhusal.com.np";
    return (
      <div className="font-sans h-[450px] w-[76%] sm:h-fit sm:w-fit flex flex-col gap-5 justify-center items-left sm:items-center sm:rounded-xl  pl-[6%] ml-[6%] sm:p-8 mt-16 sm:m-0 sm:shadow-custom-blue/20 sm:shadow-2xl sm:border sm:border-custom-blue-dark/5 bg-white  border border-solid border-l-1 border-b-0 border-t-0 border-r-0 border-custom-blue">
        <div className="text-2xl font-semibold">Email verification</div>

        <div className=" flex flex-col items-left sm:items-center w-fit">
          <div className="w-fit flex flex-col">
            <label htmlFor="otp" className="font-sans text-base mb-2">
              Enter OTP{" "}
              <span
                id="otp-status"
                className="text-red-600 font-sans text-base hidden"
              >
                {"<Wrong OTP!>"}
              </span>
            </label>
            <input
              type="number"
              id="otp"
              placeholder="6-digit number"
              className="w-[240px] font-sans text-base p-2 sm:rounded-lg border border-solid border-gray-300 focus:outline-custom-blue"
            />
          </div>
        </div>
        <div className="w-[240px] flex flex-row justify-left sm:justify-center mb-2">
          <button
            onClick={this.verifyClicked}
            className=" w-full font-sans text-base active:bg-custom-blue-dark bg-custom-blue border-0 text-white h-10 sm:rounded-lg font-semibold "
          >
            Verify
          </button>
        </div>
        <div
          id="otp-instruction"
          className=" w-[220px] text-left sm:text-center hidden"
        >
          We've sent a 6-digit code to your email.
        </div>
      </div>
    );
  }
}
export default withRouter(EmailVerification);
