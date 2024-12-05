import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PharmRegistrationDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pharmacyName: "",
    pharmacyAddress: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    ethnicity: "",
    spokenLanguage: "",
    yearsExperience: "",
    pharmacyLicense: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pharmacyName.trim())
      newErrors.pharmacyName = "Pharmacy name is required";
    if (!formData.pharmacyAddress.trim())
      newErrors.pharmacyAddress = "Pharmacy address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.state.trim()) newErrors.state = "State/Province is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required";
    if (!formData.spokenLanguage)
      newErrors.spokenLanguage = "Spoken language is required";
    if (!formData.yearsExperience)
      newErrors.yearsExperience = "Years of experience are required";
    if (!formData.pharmacyLicense)
      newErrors.pharmacyLicense = "Pharmacy license number is required";

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
      
      navigate("/Pharmacist/qualifications"); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Registration details
          </h1>
          <p className="text-gray-500">
            Fill in the requested information
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Pharmacy name", name: "pharmacyName", type: "text" },
              { label: "Pharmacy address", name: "pharmacyAddress", type: "text" },
              { label: "City", name: "city", type: "text" },
              { label: "Zip code", name: "zipCode", type: "text" },
              { label: "State/Province", name: "state", type: "text" },
              { label: "Country", name: "country", type: "text" },
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
                  className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                    errors[field.name] ? "border-red-500" : "border-blue"
                  } rounded-lg focus:ring-blue focus:border-blue`}
                />
                {errors[field.name] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {[
              {
                label: "Ethnicity",
                name: "ethnicity",
                options: ["Select", "African", "Asian", "Caucasian", "Other"],
              },
              {
                label: "Spoken language",
                name: "spokenLanguage",
                options: ["Select", "English", "Spanish", "French", "Other"],
              },
            ].map((dropdown) => (
              <div key={dropdown.name} className="mb-4">
                <label
                  htmlFor={dropdown.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {dropdown.label} <span className="text-red-500">*</span>
                </label>
                <select
                  id={dropdown.name}
                  name={dropdown.name}
                  value={formData[dropdown.name]}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                    errors[dropdown.name] ? "border-red-500" : "border-blue"
                  } rounded-lg focus:ring-blue focus:border-blue`}
                >
                  {dropdown.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[dropdown.name] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[dropdown.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="mb-4">
              <label
                htmlFor="yearsExperience"
                className="block text-sm font-medium text-gray-700"
              >
                Years of experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="yearsExperience"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                  errors.yearsExperience ? "border-red-500" : "border-blue"
                } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.yearsExperience && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.yearsExperience}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="pharmacyLicense"
                className="block text-sm font-medium text-gray-700"
              >
                Pharmacy license number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pharmacyLicense"
                name="pharmacyLicense"
                value={formData.pharmacyLicense}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border ${
                  errors.pharmacyLicense ? "border-red-500" : "border-blue"
                } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.pharmacyLicense && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.pharmacyLicense}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/logout")}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Log out
            </button>
            <button
              type="submit"
              className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue transition duration-200"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PharmRegistrationDetails;
