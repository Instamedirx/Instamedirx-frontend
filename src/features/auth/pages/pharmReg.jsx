import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPharmacist = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password && formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", formData);
      
      navigate("/Pharmacist/Registration Details"); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg relative">
        <button
          className="text-blue font-semibold mb-4 hover:underline absolute top-4 left-4"
          aria-label="Go Back"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <h1 className="text-2xl font-semibold text-gray-800">Register as a Pharmacist</h1>
            <p className="text-gray-500 mt-3">Fill in the registration details requested</p>
          </div>

          <div className="mt-6">
            {[
              { label: "First name", name: "firstName", type: "text" },
              { label: "Last name", name: "lastName", type: "text" },
              { label: "Email address", name: "email", type: "email" },
              { label: "Phone number", name: "phone", type: "text" },
              { label: "Password", name: "password", type: "password" },
              { label: "Confirm password", name: "confirmPassword", type: "password" },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50  border ${
                    errors[field.name] ? "border-red-500" : "border-blue"
                  } rounded-lg focus:ring-blue focus:border-blue`}
                />
                {errors[field.name] && (
                  <p className="text-sm text-red-500 mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a href="/Pharmacist/Registration Details">
            <button
              type="submit"
              className="w-full bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Next
            </button>
            </a>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPharmacist;
