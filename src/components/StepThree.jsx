import React from "react";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

const StepThree = () => {
  return (
    <div className="justify-between items-center h-full p-4">
      {/* Header */}
      <div className="text-center mt-5">
        <h1 className="text-xl font-normal">Circle</h1>
        <p className="text-l font-semibold mt-2">
          Rent at <span className="text-primary-blue font-bold">Zero</span>{" "}
          security deposit
        </p>
      </div>

      {/* Steps List */}
      <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow-md">
        <p className="text-sm text-center font-medium mb-2">
          Set-up No Cost EMI in 3 steps
        </p>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center bg-primary-blue text-white w-10 h-10 rounded-full">
              1
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-primary-blue">
                Eligibility Check
              </p>
              <p className="text-gray-500 text-sm">Basic Details - PAN & DOB</p>
              <p className="text-gray-500 text-sm">Work Details - Employment</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center bg-gray-200 text-gray-500 w-10 h-10 rounded-full">
              2
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-gray-700">Setup AutoPay</p>
              <p className="text-gray-500 text-sm">
                Bank Details - Salary Account
              </p>
              <p className="text-gray-500 text-sm">
                Identity Verification - KYC
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center bg-gray-200 text-gray-500 w-10 h-10 rounded-full">
              3
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-gray-700">Move-In</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Button */}
      <div className="flex flex-col items-center mt-4">
        <label className="flex items-start space-x-2 text-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm">
            By clicking this, you approve our{" "}
            <a href="#" className="text-blue-600">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              privacy policy
            </a>
            .
          </span>
        </label>

        <button className="mt-4 w-full bg-primary-blue text-white font-semibold py-3 rounded-lg text-lg">
          Get Started
        </button>
        <button className="mt-2 text-blue-600 font-semibold">Go Back</button>
      </div>
    </div>
  );
};

export default StepThree;