"use client"; // code to tell next.js it's client-side code

import { useState } from "react";

export default function Home() {
  // State management for selections and inputs
  const [medicationInput, setMedicationInput] = useState("");
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
  const [showMedicationDropdown, setShowMedicationDropdown] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [brandInput, setBrandInput] = useState("");
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const [specialtyInput, setSpecialtyInput] = useState(""); // Input value
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null); // Selected value
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false); // Control dropdown visibility

  const [selectedHealthCondition, setSelectedHealthCondition] = useState<string | null>(null);
  const [healthConditionInput, setHealthConditionInput] = useState("");
  const [showhealthConditionDropdown, setShowhealthConditionDropdown] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [locationInput, setLocationInput] = useState("");
  const [showlocationDropdown, setShowlocationDropdown] = useState(false);

  const [rating, setRating] = useState<number>(0);

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<string | null>(null);
  const [deliveryInput, setDeliveryInput] = useState("");
  const [showDeliveryOptionDropdown, setShowDeliveryOptionDropdown] = useState(false);
 

  const [distance, setDistance] = useState<number>(0);

  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [genderInput, setGenderInput] = useState("");
  const [showgenderDropdown, setGenderDropdown] = useState(false);

  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [ageInput, setAgeInput] = useState("");
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);

  const [setModality, setSelectedModality] = useState<string | null>(null);
  const [modalityInput, setModalityInput] = useState("");
  const [showModalityDropdown, setShowModalityDropdown] = useState(false);

  const [setLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [languageInput, setLanguageInput] = useState("");
  const [showlanguageDropdown, setShowLanguageDropdown] = useState(false);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPriceRange([value, priceRange[1]]);
  };

  // Dropdown options
  const specialties = [
    "General Practitioner", "Pharmacist", "Dentist", "Dermatologist",
    "Gyneacologist", "Optometrist", "Pathologist", "Counsellor",
    "Physiotherapist", "Pediatrist", "Cardiologist", "Orthopedist", "Urologist"
  ];

  const medications = [
    "Antibiotics", "Pain relief", "Vitamins", "Allergies",
    "Capsules", "Anti-bacterial", "Malaria", "Herbal"
  ];

  const brands = ["Emzor", "May & Baker", "Tuyil", "Vixa", "Trinacx", "Bond"];

  const healthConditions = [
    "Diabetics", "Hypertension", "Malaria", "Typhoid", "Diarrhoea",
    "Infection", "Asthma", "Fertility", "Fever", "Allergies"
  ];

  const locations = ["Lagos", "Abuja", "Kano", "Plateau", "Ogun", "Rivers", "Port Harcourt"];

  const deliveryOptions = ["Home Delivery", "Delivery Partner Service", "Click & Collect"];

  const genders = ["Male", "Female", "Other"];

  const ages = ["1 - 9", "10 - 19", "20-29", "30 - 39", "40 - 49", " 50 above"];

  const modalities = ["Video chat", "Voice chat", "Text chat", "Voice note", "In-Person"];

  const languages = ["English", "Yoruba", "Hausa", "Igbo", "Chineese"];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-3xl p-4 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-semibold text-center text-blue-600">Back</h1>

        <div className="w-full space-y-6">
          {/* Specialty Section */}
          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Specialist</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={specialtyInput}
                onChange={(e) => setSpecialtyInput(e.target.value)}
                onFocus={() => setShowSpecialtyDropdown(true)} // Show dropdown on focus
              />
              {showSpecialtyDropdown && specialtyInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {specialties
                    .filter((s) => s.toLowerCase().includes(specialtyInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedSpecialty(s);
                          setSpecialtyInput(s); // Update input field with the selected option
                          setShowSpecialtyDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {specialties.filter((s) => s.toLowerCase().includes(specialtyInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedSpecialty && <div className="text-green-500 mt-2">Selected: {selectedSpecialty}</div>}
          </section>

          {/* Medication */}

          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Medication</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={medicationInput}
                onChange={(e) => setMedicationInput(e.target.value)}
                onFocus={() => setShowMedicationDropdown(true)} // Show dropdown on focus
              />
              {showMedicationDropdown && medicationInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {medications
                    .filter((s) => s.toLowerCase().includes(medicationInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedMedication(s);
                          setMedicationInput(s); // Update input field with the selected option
                          setShowMedicationDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {medications.filter((s) => s.toLowerCase().includes(medicationInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedMedication && <div className="text-green-500 mt-2">Selected: {selectedMedication}</div>}
          </section>

          {/* Brand */}

          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Brand</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={brandInput}
                onChange={(e) => setBrandInput(e.target.value)}
                onFocus={() => setShowBrandDropdown(true)} // Show dropdown on focus
              />
              {showBrandDropdown && brandInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {brands
                    .filter((s) => s.toLowerCase().includes(brandInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedBrand(s);
                          setBrandInput(s); // Update input field with the selected option
                          setShowBrandDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {brands.filter((s) => s.toLowerCase().includes(brandInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedBrand && <div className="text-green-500 mt-2">Selected: {selectedBrand}</div>}
          </section>

          {/* Health Condition */}

          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Health Condition</h2>
            <div className="relative">
              <input 
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={healthConditionInput}
                onChange={(e) => setHealthConditionInput(e.target.value)}
                onFocus={() => setShowhealthConditionDropdown(true)} // Show dropdown on focus
              />
              {showhealthConditionDropdown && healthConditionInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {healthConditions
                    .filter((s) => s.toLowerCase().includes(healthConditionInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedHealthCondition(s);
                          setHealthConditionInput(s); // Update input field with the selected option
                          setShowhealthConditionDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {healthConditions.filter((s) => s.toLowerCase().includes(healthConditionInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedHealthCondition && <div className="text-green-500 mt-2">Selected: {selectedHealthCondition}</div>}
          </section>

          {/* Location */}

          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Location </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onFocus={() => setShowlocationDropdown(true)} // Show dropdown on focus
              />
              {showlocationDropdown && locationInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {locations
                    .filter((s) => s.toLowerCase().includes(locationInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedLocation(s);
                          setLocationInput(s); // Update input field with the selected option
                          setShowlocationDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {locations.filter((s) => s.toLowerCase().includes(locationInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedLocation && <div className="text-green-500 mt-2">Selected: {selectedLocation}</div>}
          </section>

          {/* Delivery Option */}
          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Delivery Option </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={deliveryInput}
                onChange={(e) => setDeliveryInput(e.target.value)}
                onFocus={() => setShowDeliveryOptionDropdown(true)} // Show dropdown on focus
              />
              {showDeliveryOptionDropdown && deliveryInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {deliveryOptions
                    .filter((s) => s.toLowerCase().includes(deliveryInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedDeliveryOption(s);
                          setDeliveryInput(s); // Update input field with the selected option
                          setShowDeliveryOptionDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {deliveryOptions.filter((s) => s.toLowerCase().includes(deliveryInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedDeliveryOption && <div className="text-green-500 mt-2">Selected: {selectedDeliveryOption}</div>}
          </section>

          {/* Age */}
          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Age </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search specialty"
                className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                onFocus={() => setShowAgeDropdown(true)} // Show dropdown on focus
              />
              {showAgeDropdown && ageInput && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto z-10">
                  {ages
                    .filter((s) => s.toLowerCase().includes(ageInput.toLowerCase()))
                    .map((s) => (
                      <li
                        key={s}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedAge(s);
                          setAgeInput(s); // Update input field with the selected option
                          setShowAgeDropdown(false); // Hide dropdown after selection
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  {ages.filter((s) => s.toLowerCase().includes(ageInput.toLowerCase())).length === 0 && (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
            {selectedAge && <div className="text-green-500 mt-2">Selected: {selectedAge}</div>}
          </section>
          

          {/* Price Range Section */}
          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Price Range</h2>
            <input
              type="range"
              min={0}
              max={100}
              value={priceRange[0]}
              onChange={handlePriceRangeChange}
              className="w-full h-2 bg-blue-200 rounded-lg focus:outline-none"
            />
            <div className="flex justify-between text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </section>

          {/* Rating Section */}
          <section>
            <h2 className="font-semibold text-lg text-blue-700 mb-2">Rating</h2>
            <div className="relative w-full h-6 bg-gray-200 rounded-full">
              {/* Progress bar */}
              <div
                className="absolute top-0 left-0 h-full bg-blue-900 rounded-full transition-all"
                style={{ width: `${(rating / 5) * 100}%` }}
              ></div>
              {/* Stars on the progress bar */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            {rating > 0 && <div className="text-green-500 mt-2">Rating: {rating}</div>}
          </section>
           {/* Buttons */}
           <div className="flex gap-6 mt-6 justify-center">
            <button
              className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition duration-300"
              onClick={() => alert("Filters Applied")}
            >
              Apply
            </button>
            <button
              className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition duration-300"
              onClick={() => {
                // Reset all states
                setSelectedSpecialty(null);
                setSpecialtyInput("");
                setSelectedMedication(null);
                setMedicationInput("");
                setSelectedBrand(null);
                setBrandInput("");
                setSelectedHealthCondition(null);
                setHealthConditionInput("");
                setSelectedLocation(null);
                setLocationInput("");
                setSelectedAge(null);
                setAgeInput("");
                setSelectedDeliveryOption(null);
                setDeliveryInput("");
                setPriceRange([0, 100]);
                setRating(0);
              }}
            >
              Clear
            </button>







          </div>
        </div>
      </main>
    </div>
  );
}
