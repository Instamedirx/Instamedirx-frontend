import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AccountTypeSelection = () => {
  const accountTypes = [
    {
      image: "/src/assets/Group 37.png", 
      route: "/client",
    },
    {
      image: "/src/assets/Group 40.png",
      route: "/doctor",
    },
    {
      image: "/src/assets/Frame 22.png", 
      route: "/selection/Pharmacist",
    },
  ];

  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const handleClick = (type) => {
    setSelectedType(type.name);
    navigate(type.route);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 bg-white ">
        <button
          className="font-bold text-blue mb-4 hover:underline"
          aria-label="Go Back"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Account Type</h1>
          <p className="text-gray-500">Select preferred account type</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {accountTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => handleClick(type)}
              className={`flex flex-col items-center p-4 rounded-lg shadow-sm cursor-pointer transition duration-300 ${
                selectedType === type.name
                  ? "bg-blue-100 shadow-md"
                  : "bg-blue-50 hover:shadow-md hover:bg-blue-100"
              }`}
              aria-label={`Select ${type.name} Account Type`}
            >
              <img
                src={type.image}
                alt={`${type.name} icon`}
                className="w-24 h-24 mb-2 rounded-full object-cover"
              />
              
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-bold text-black ">
            Already have an account?{" "}
            <a
              href="/"
              className="text-blue font-semibold hover:underline"
            >
              LOGIN
            </a>
          </p>
        </div>
      </div>

      <div>
        <img src="/src/assets/image 29.png" alt="" className="w-2/3" />
      </div>
    </div>
  );
};

export default AccountTypeSelection;
