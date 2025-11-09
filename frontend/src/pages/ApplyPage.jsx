import React, { useState } from "react";
import { Upload, Shield, Github, FileText } from "lucide-react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { applications } from "../data/mockData";
import "./ApplyPage.css";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    size: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="apply-page">
      <h1 className="page-title">Apply for Funding</h1>

      <Card>
        <form className="apply-form">
          <div className="form-group">
            <label className="form-label">Project/Dataset Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Ancient Manuscript Archive"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Select a category</option>
              <option value="climate">Climate</option>
              <option value="biology">Biology</option>
              <option value="government">Government</option>
              <option value="healthcare">Healthcare</option>
              <option value="history">History</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="form-input"
              placeholder="Describe your dataset, its purpose, and why it should be publicly accessible..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Dataset Size</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g., 250 GB"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Requested Amount (USD)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="form-input"
                placeholder="5000"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Supporting Documents (IPFS)</label>
            <div className="upload-area">
              <Upload className="upload-icon" />
              <p className="upload-text">Click to upload or drag and drop</p>
              <p className="upload-hint">PDF, DOC, or ZIP up to 50MB</p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Connect Attestations</label>
            <div className="attestation-list">
              <button type="button" className="attestation-btn">
                <Shield className="attestation-icon" />
                <span>Gitcoin Passport</span>
                <span className="attestation-status">Not Connected</span>
              </button>
              <button type="button" className="attestation-btn">
                <Github className="attestation-icon" />
                <span>GitHub Profile</span>
                <span className="attestation-status">Not Connected</span>
              </button>
              <button type="button" className="attestation-btn">
                <FileText className="attestation-icon" />
                <span>ORCID</span>
                <span className="attestation-status">Not Connected</span>
              </button>
            </div>
          </div>

          <div className="info-box-apply">
            <h3 className="info-box-title">Application Process</h3>
            <ol className="process-list">
              <li>Submit application with required documentation</li>
              <li>Verification by curators (2-3 days)</li>
              <li>Automated and human scoring (3-5 days)</li>
              <li>Community voting period (7 days)</li>
              <li>Funding distribution if approved</li>
            </ol>
          </div>

          <Button className="full-width">Submit Application</Button>
        </form>
      </Card>

      {/* My Applications */}
      <Card>
        <h2 className="card-title">My Applications</h2>
        <div className="applications-list">
          {applications.map((app) => (
            <div key={app.id} className="application-item">
              <div className="application-info">
                <h3 className="application-title">{app.title}</h3>
                <p className="application-meta">
                  Submitted {app.submitted} • {app.amount}
                </p>
              </div>
              <div className="application-status-section">
                <span
                  className={`application-status ${app.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {app.status}
                </span>
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ApplyPage;
