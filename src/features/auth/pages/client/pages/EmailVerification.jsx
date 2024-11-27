import { useState, useRef } from "react";
import noficationIcon from "./../../../../../assets/account_selection/image 34.png";
import mailIcon from "./../../../../../assets/account_selection/image 35.png";

const EmailVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Automatically move to the next input
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move focus to the previous input
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (code.join("").length === 6) {
      setIsVerified(true);
    } else {
      alert("Please enter a 6-digit code.");
    }
  };

  const isButtonDisabled = code.includes("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-black to-blue-500">
      {!isVerified ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-sm">
          <div className="mb-4 w-10 m-auto">
            <img src={noficationIcon} alt="Notification Icon" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Please verify your email</h2>
          <p className="text-gray-500 text-sm mb-4">
            We’ve sent a code to <br />
            <span className="font-bold">youremail@gmail.com</span>
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-10 h-10 text-center border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-grey"
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            disabled={isButtonDisabled}
            className={`px-4 py-2 rounded-lg font-semibold text-white ${
              isButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue hover:bg-blue-600"
            }`}
          >
            Verify
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-sm">
          <div className="w-10 m-auto">
            <img src={mailIcon} alt="Mail Icon" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Email verified</h2>
          <p className="text-sm mb-4">
            Your email has been verified. <br />
            You can now continue with account registration.
          </p>
          <button
            onClick={() => alert("Proceed to next steps!")}
            className="bg-blue hover:bg-blue text-white font-semibold px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
