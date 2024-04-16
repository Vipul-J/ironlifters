import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSyncAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar';
import '../../assets/styles/core.css'
function Home() {
  return (
    <>
    <Navbar />

    <div className="container mt-5">
      <div className="row">
        {/* Add New Members Card */}
        <div className="col-md-4">
        <a href='/admin/addmember' className='text-decoration-none'>
          <div className="card shadow-sm p-2">
            <div className="card-body">
              <h5 className="card-title dash-title">
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                Add New Members
              </h5>
              <p className="card-text">Add new members to your gym.</p>
            </div>
          </div>
          </a>
        </div>

        {/* Renewals Card */}
        <div className="col-md-4">
        <a href='/admin/renewals' className='text-decoration-none'>
          <div className="card shadow-sm p-2">
            <div className="card-body">
              <h5 className="card-title dash-title">
                <FontAwesomeIcon icon={faSyncAlt} className="me-2" />
                Renewals
              </h5>
              <p className="card-text">Manage membership renewals.</p>
            </div>
          </div>
          </a>

        </div>

        {/* Reports Card */}
        <div className="col-md-4">
        <a href='/admin/reports' className='text-decoration-none'>
          <div className="card shadow-sm p-2">
            <div className="card-body">
              <h5 className="card-title dash-title">
                <FontAwesomeIcon icon={faChartBar} className="me-2" />
                Reports
              </h5>
              <p className="card-text">Generate and view reports.</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
