import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import config from "../../config/config";

const PaymentPage = () => {
  const location = useLocation();

  const [qrLink, setQrLink] = useState("");

  useEffect(() => {
    setQrLink ("upi://pay?pa=praveen87552@okicici&pn=Praveen%20Rajput&am=51.00&cu=INR&aid=uGICAgMDe_tz9ZQ");
  }, [location.state]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="max-h-screen max-w-md  min-w-md lg:w-[40vw] flex flex-col bg-gray-100 p-4">
        {/* Header Section */}
        <header className="bg-blue-300 text-white p-4 rounded-lg mb-4 flex justify-between items-center">
          <div className="    flex items-center justify-center text-black gap-4">
            Donate
            <div className=""> ₹51</div>
          </div>
        </header>

        {/* Payment Options */}
        <div className=" bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Payment Options
          </h2>

          <div className="space-y-4">
            {/* SCAN Option */}
            <Link
              to="/scanner"
              className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <div className="flex items-center space-x-4">
                <i className="fas fa-money-check text-blue-500 text-xl"></i>
                <span>Scan Qr Code</span>
              </div>
              <div className=" bg-white rounded-full w-10 h-10 flex items-center justify-center     z-30 overflow-hidden">
                <img
                  className="w-10"
                  src="https://raw.githubusercontent.com/praveen378/everything-ok/refs/heads/main/src/assets/images/bar.webp" // Replace with real payment icons
                  alt="UPI Options"
                />
              </div>
            </Link>

            {/* UPI Option */}
            <a
              href={qrLink}
              className="flex justify-between items-center p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-200 gap-2"
            >
              <div className="flex items-center space-x-4">
                <i className="far fa-credit-card text-blue-500 text-xl"></i>
                <span>UPI App</span>
              </div>
              <div className="images flex ">
                <div className="   bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-300 z-30 overflow-hidden">
                  <img
                    className="w-8 bg-white"
                    src="https://raw.githubusercontent.com/praveen378/everything-ok/refs/heads/main/src/assets/images/phone.webp" // Replace with card icons
                    alt="Card Options"
                  />
                </div>
                <div className="   bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-300 z-30 overflow-hidden">
                  <img
                    className="w-8"
                    src="https://raw.githubusercontent.com/praveen378/everything-ok/refs/heads/main/src/assets/images/google.webp" // Replace with card icons
                    alt="Card Options"
                  />
                </div>
                <div className="   bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-300 z-30 overflow-hidden">
                  <img
                    className="w-9"
                    src="https://raw.githubusercontent.com/praveen378/everything-ok/refs/heads/main/src/assets/images/patym.webp" // Replace with card icons
                    alt="Card Options"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Summary */}
      </div>
    </div>
  );
};

export default PaymentPage;
