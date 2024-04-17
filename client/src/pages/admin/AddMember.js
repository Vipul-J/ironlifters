import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

function AddMember() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [medicalDetails, setMedicalDetails] = useState('');

  const [packageTypes, setPackageTypes] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [packagetype, setpackagetype] = useState('');

  const [totalPackageFee, setTotalPackageFee] = useState('');
  const [paymentPlanType, setPaymentPlanType] = useState('');
  const [initialPaymentAmount, setInitialPaymentAmount] = useState('');
  const [initialPaymentDate, setInitialPaymentDate] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [totalPaymentsRemaining, setTotalPaymentsRemaining] = useState('');

  useEffect(() => {
    fetchPackageTypes();
  }, []);

  const fetchPackageTypes = async () => {
    try {
      const response = await fetch('http://localhost:3001/packages');
      if (response.ok) {
        const data = await response.json();
        // Extract package type names from data
        const types = data.map(pkg => pkg.packageName);
        setPackageTypes(types);
      } else {
        throw new Error('Failed to fetch package types');
      }
    } catch (error) {
      console.error('Error fetching package types:', error.message);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
  };

  return (
    <>
    <Navbar />
    <div className="container">
    <div className=" border-bottom border-1">
                    <div className="row">
                        <div className="col pt-4 pb-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="text-center fw-bold mt-3">Add New Package</h3>
                                <a className='btn btn-dark fw-bold btn-md' href='/admin/Package/allPackages'>Go to Package List</a>
                            </div>
                        </div>
                    </div>
                </div>                 <div className='d-flex justify-content-center align-items-center mt-5'>

      <div className="col-md-8 border p-5 rounded">

      <form onSubmit={handleSubmit}>
            <div className='mb-5'>
            <h2 className='panel-title fs-3 mb-3 mt-5'>Personal Details</h2>
            <div className='row mb-3'>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <select className="form-select form-select-sm" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <label htmlFor="gender">Gender</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="date" className="form-control form-control-sm" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                  <label htmlFor="dob">Date of Birth</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="tel" className="form-control form-control-sm" id="mobileNumber" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                  <label htmlFor="mobileNumber">Mobile Number</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <textarea className="form-control form-control-sm" id="homeAddress" placeholder="Home Address" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} required></textarea>
                  <label htmlFor="homeAddress">Home Address</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="aadharNumber" placeholder="Aadhar Card Number" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
                  <label htmlFor="aadharNumber">Aadhar Card Number</label>
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="medicalDetails" value={medicalDetails} onChange={(e) => setMedicalDetails(e.target.checked)} />
                  <label className="form-check-label" htmlFor="medicalDetails">
                    Any medical details?
                  </label>
                </div>
              </div>
            </div>

            <h2 className='panel-title fs-3 mb-3 mt-5'>Package Plan</h2>
            <div className="row mb-3">
            <div className="col">
              <div className="form-floating">
                <select className="form-select form-select-sm" id="packagetype" value={packagetype} onChange={(e) => setpackagetype(e.target.value)} required>
                  <option value="">Select Package Type</option>
                  {/* Dynamically generate options for package types */}
                  {packageTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <label htmlFor="packagetype">Package Type</label>
              </div>
            </div>

              <div className="col">
                <div className="form-floating">
                  <input type="date" className="form-control form-control-sm" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                  <label htmlFor="startDate">Start Date</label>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="form-floating">
                <input type="date" className="form-control form-control-sm" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                <label htmlFor="endDate">End Date</label>
              </div>
            </div>


            <h2 className='panel-title fs-3 mb-3 mt-5'>Billing Details</h2>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="totalPackageFee" placeholder="Total Package Fee" value={totalPackageFee} onChange={(e) => setTotalPackageFee(e.target.value)} required />
                  <label htmlFor="totalPackageFee">Total Package Fee</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-select form-select-sm" id="paymentPlanType" value={paymentPlanType} onChange={(e) => setPaymentPlanType(e.target.value)} required>
                    <option value="">Select Payment Plan</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                  <label htmlFor="paymentPlanType">Payment Plan Type</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="initialPaymentAmount" placeholder="Initial Payment Amount" value={initialPaymentAmount} onChange={(e) => setInitialPaymentAmount(e.target.value)} required />
                  <label htmlFor="initialPaymentAmount">Initial Payment Amount</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="date" className="form-control form-control-sm" id="initialPaymentDate" value={initialPaymentDate} onChange={(e) => setInitialPaymentDate(e.target.value)} required />
                  <label htmlFor="initialPaymentDate">Initial Payment Date</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="amountDue" placeholder="Amount Due" value={amountDue} onChange={(e) => setAmountDue(e.target.value)} required />
                  <label htmlFor="amountDue">Amount Due</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="date" className="form-control form-control-sm" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                  <label htmlFor="dueDate">Due Date</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="paymentFrequency" placeholder="Payment Frequency" value={paymentFrequency} onChange={(e) => setPaymentFrequency(e.target.value)} required />
                  <label htmlFor="paymentFrequency">Payment Frequency</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-sm" id="totalPaymentsRemaining" placeholder="Total Payments Remaining" value={totalPaymentsRemaining} onChange={(e) => setTotalPaymentsRemaining(e.target.value)} required />
                  <label htmlFor="totalPaymentsRemaining">Total Payments Remaining</label>
                </div>
              </div>
            </div>

            <div className="form-group text-end">
              <button type="submit" id="submit_btn" className="btn btn-md btn-dark">Save Record</button>
            </div>
          </div>
      </form>
      </div>
    </div>
    </div>

    </>
  );
}

export default AddMember;
