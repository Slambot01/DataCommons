import React, { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import "./DepositPage.css";

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState("");

  return (
    <div className="deposit-page">
      <h1 className="page-title">Depositor Portal</h1>

      <div className="deposit-grid">
        {/* Deposit Form */}
        <Card>
          <h2 className="card-title">Deposit Funds</h2>
          <div className="deposit-form">
            <div className="form-group">
              <label className="form-label">Amount (USDC)</label>
              <input
                type="number"
                placeholder="0.00"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="form-input"
              />
              <div className="form-helper">
                <span>Balance: 10,000 USDC</span>
                <button className="link-button">Max</button>
              </div>
            </div>

            <div className="info-box">
              <div className="info-row">
                <span className="info-label">Current APY</span>
                <span className="info-value blue">5.2%</span>
              </div>
              <div className="info-row">
                <span className="info-label">Estimated Yearly Impact</span>
                <span className="info-value green">~$520 to open data</span>
              </div>
            </div>

            <Button className="full-width">Deposit USDC</Button>
          </div>
        </Card>

        {/* My Deposits */}
        <Card>
          <h2 className="card-title">My Deposits</h2>
          <div className="deposit-stats">
            <div className="deposit-total">
              <p className="deposit-total-label">Total Deposited</p>
              <p className="deposit-total-value">25,000 USDC</p>
            </div>

            <div className="deposit-metrics">
              <div className="metric-box">
                <p className="metric-label">Yield Generated</p>
                <p className="metric-value green">1,247 USDC</p>
              </div>
              <div className="metric-box">
                <p className="metric-label">Datasets Funded</p>
                <p className="metric-value blue">7</p>
              </div>
            </div>

            <Button variant="secondary" className="full-width">
              Withdraw Funds
            </Button>

            <div className="impact-section">
              <h3 className="impact-title">Impact Breakdown</h3>
              <div className="impact-list">
                <div className="impact-item">
                  <span>Climate datasets</span>
                  <span className="impact-amount">$520</span>
                </div>
                <div className="impact-item">
                  <span>Medical research</span>
                  <span className="impact-amount">$380</span>
                </div>
                <div className="impact-item">
                  <span>Public archives</span>
                  <span className="impact-amount">$347</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <h2 className="card-title">Transaction History</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Tx</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deposit</td>
                <td className="amount-positive">+10,000 USDC</td>
                <td>Oct 28, 2024</td>
                <td>
                  <span className="badge badge-success">Completed</span>
                </td>
                <td>
                  <a href="#" className="table-link">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>Yield Harvest</td>
                <td className="amount-positive">+247 USDC</td>
                <td>Nov 1, 2024</td>
                <td>
                  <span className="badge badge-success">Completed</span>
                </td>
                <td>
                  <a href="#" className="table-link">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DepositPage;
