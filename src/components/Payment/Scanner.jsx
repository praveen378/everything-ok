 import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";
import config from "../../config/config";

const Scanner = () => {
  const [qrLink, setQrLink] = useState("");

  useEffect(() => {
    setQrLink(
      "upi://pay?pa=praveen87552@okicici&pn=Praveen%20Rajput&am=51.00&cu=INR&aid=uGICAgMDe_tz9ZQ" // Set QR code link from config
    );
  }, [qrLink]);

  return (
    <div className="font-sans p-8 max-w-md mx-auto text-center">
      <div className="text-gray-700 mb-4">
        Payment Amount: <span className="font-semibold">₹51</span>
      </div>

      {qrLink && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your QR Code:
          </h3>
          <div className="flex justify-center mb-4">
            <QRCode value={qrLink} size={200} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanner;
