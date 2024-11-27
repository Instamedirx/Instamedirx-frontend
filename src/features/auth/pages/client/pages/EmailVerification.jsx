import { useState } from "react";

const EmailVerification = () => {
  const [isVerified, setIsVerified] = useState(false); 
  const [code, setCode] = useState(Array(6).fill("")); 

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1); 
    setCode(newCode);
  };

  const handleVerify = () => {
    if (code.join("").length === 6) {
      setIsVerified(true); 
    } else {
      alert("Please enter a 6-digit code.");
    }
  };

  const isButtonDisabled = code.includes(""); // Check if all fields are filled

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-black to-blue-500">
      {!isVerified ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-sm">
          <div className="text-blue text-2xl mb-4">📤</div>
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
                className="w-10 h-10 text-center border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-grey"
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            disabled={isButtonDisabled} // Disable button if inputs are incomplete
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
          <div className="text-blue text-3xl mb-4">✅</div>
          <h2 className="text-lg font-semibold mb-2">Email verified</h2>
          <p className="text-gray-500 text-sm mb-4">
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
