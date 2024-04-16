import React, { useState } from 'react';
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

  const [membershipType, setMembershipType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [totalMembershipFee, setTotalMembershipFee] = useState('');
  const [paymentPlanType, setPaymentPlanType] = useState('');
  const [initialPaymentAmount, setInitialPaymentAmount] = useState('');
  const [initialPaymentDate, setInitialPaymentDate] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [totalPaymentsRemaining, setTotalPaymentsRemaining] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1 className='text-center mb-5'>Add New Member</h1>
      <form onSubmit={handleSubmit} >
        <div className="row justify-content-center" >
          <div className="col-md-8 border p-5 rounded" >
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

            <h2 className='panel-title fs-3 mb-3 mt-5'>Membership Plan</h2>
            <div className="row mb-3">
              <div className="col">
                <div className="form-floating">
                  <select className="form-select form-select-sm" id="membershipType" value={membershipType} onChange={(e) => setMembershipType(e.target.value)} required>
                    <option value="">Select Membership Type</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="gold">Gold</option>
                  </select>
                  <label htmlFor="membershipType">Membership Type</label>
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
                  <input type="text" className="form-control form-control-sm" id="totalMembershipFee" placeholder="Total Membership Fee" value={totalMembershipFee} onChange={(e) => setTotalMembershipFee(e.target.value)} required />
                  <label htmlFor="totalMembershipFee">Total Membership Fee</label>
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

            <div class="form-group text-end">
              <button type="submit" id="submit_btn" class="btn btn-md btn-dark">Save Record</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddMember;
