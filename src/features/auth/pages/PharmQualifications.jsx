import  { useState } from "react";

const QualificationsForm = () => {
  const [certifications, setCertifications] = useState([{ id: 1 }]);
  const [degrees, setDegrees] = useState([{ id: 1 }]);

  const addCertification = () => {
    setCertifications([...certifications, { id: certifications.length + 1 }]);
  };

  const addDegree = () => {
    setDegrees([...degrees, { id: degrees.length + 1 }]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <button className="text-blue text-bold mb-4">← Back</button>
        <h1 className="text-xl font-semibold mb-6">Submit your qualifications</h1>

        {/* Certifications/Licenses Section */}
        {certifications.map((cert, index) => (
          <div key={cert.id} className="mb-6">
            <h2 className="text-lg font-medium">Certifications/Licenses</h2>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="License number"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <input
                type="date"
                placeholder="Issue date"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <input
                type="date"
                placeholder="Expiration date"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <label className="block">
                <span className="block mb-1">Upload document</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue file:cursor-pointer"
                />
              </label>
            </div>
          </div>
        ))}
        <button
          onClick={addCertification}
          className="text-blue mb-6 text-sm hover:underline"
        >
          + Add more certifications
        </button>

        {/* Degrees/Diploma Section */}
        {degrees.map((degree, index) => (
          <div key={degree.id} className="mb-6">
            <h2 className="text-lg font-medium">Degrees/Diploma</h2>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border border-blue  rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Institution"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <input
                type="number"
                placeholder="Year"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none"
              />
              <label className="block">
                <span className="block mb-1">Upload document</span>
                <input
                  type="file"
                  className="block w-full text-sm text-blue file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue file:cursor-pointer"
                />
              </label>
            </div>
          </div>
        ))}
        <button
          onClick={addDegree}
          className="text-blue mb-6 text-sm hover:underline"
        >
          + Add more degrees
        </button>

        {/* Agreement Checkbox */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue rounded"
            />
            <span className="text-gray-700 text-sm">
              I agree to the verification process.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue text-white py-3 rounded-lg shadow-md hover:bg-blue">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QualificationsForm;
