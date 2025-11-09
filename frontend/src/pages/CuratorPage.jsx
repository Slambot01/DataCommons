import React from "react";
import { Check, Clock, AlertCircle, ExternalLink } from "lucide-react";
import Card from "../components/common/Card";
import StatCard from "../components/common/StatCard";
import Button from "../components/common/Button";
import "./CuratorPage.css";

const CuratorPage = () => {
  const pendingApplications = [
    {
      id: 1,
      name: "Ancient Manuscript Archive",
      applicant: "Historical Society",
      submitted: "2 hours ago",
      amount: "$6,200",
      priority: "High",
    },
    {
      id: 2,
      name: "Seismic Activity Database",
      applicant: "EarthWatch Labs",
      submitted: "5 hours ago",
      amount: "$11,400",
      priority: "Medium",
    },
    {
      id: 3,
      name: "Open Art Collection Metadata",
      applicant: "Digital Museum DAO",
      submitted: "1 day ago",
      amount: "$3,800",
      priority: "Low",
    },
  ];

  return (
    <div className="curator-page">
      <div className="curator-header">
        <h1 className="page-title">Curator Dashboard</h1>
        <div className="reputation-badge">
          <span className="reputation-label">Your Reputation:</span>
          <span className="reputation-score">94/100</span>
        </div>
      </div>

      <div className="curator-stats">
        <StatCard label="Pending Review" value="8" iconColor="#ea580c" />
        <StatCard label="Reviewed (30d)" value="42" iconColor="#3b82f6" />
        <StatCard label="Accuracy Score" value="96%" iconColor="#16a34a" />
        <StatCard label="Rewards Earned" value="$2,340" iconColor="#9333ea" />
      </div>

      <Card>
        <div className="queue-header">
          <h2 className="card-title">Applications Queue</h2>
        </div>
        <div className="applications-queue">
          {pendingApplications.map((app) => (
            <div key={app.id} className="queue-item">
              <div className="queue-main">
                <div className="queue-info">
                  <div className="queue-title-row">
                    <h3 className="queue-title">{app.name}</h3>
                    <span
                      className={`priority-badge ${app.priority.toLowerCase()}`}
                    >
                      {app.priority} Priority
                    </span>
                  </div>
                  <p className="queue-meta">
                    By {app.applicant} • {app.submitted}
                  </p>
                </div>
                <div className="queue-amount">
                  <span className="amount-value">{app.amount}</span>
                </div>
              </div>

              <div className="queue-status">
                <div className="status-indicators">
                  <div className="status-indicator verified">
                    <Check size={16} />
                    <span>Attestations verified</span>
                  </div>
                  <div className="status-indicator pending">
                    <Clock size={16} />
                    <span>Awaiting review</span>
                  </div>
                </div>
              </div>

              <div className="queue-actions">
                <Button className="review-btn">Review Application</Button>
                <button className="action-icon-btn">
                  <ExternalLink size={20} />
                </button>
                <button className="action-icon-btn flag">
                  <AlertCircle size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="curator-grid">
        <Card>
          <h2 className="card-title">Review Activity</h2>
          <div className="activity-chart">
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: "60%" }}>
                <span className="bar-label">Mon</span>
              </div>
              <div className="chart-bar" style={{ height: "80%" }}>
                <span className="bar-label">Tue</span>
              </div>
              <div className="chart-bar" style={{ height: "45%" }}>
                <span className="bar-label">Wed</span>
              </div>
              <div className="chart-bar" style={{ height: "90%" }}>
                <span className="bar-label">Thu</span>
              </div>
              <div className="chart-bar" style={{ height: "70%" }}>
                <span className="bar-label">Fri</span>
              </div>
              <div className="chart-bar" style={{ height: "55%" }}>
                <span className="bar-label">Sat</span>
              </div>
              <div className="chart-bar" style={{ height: "30%" }}>
                <span className="bar-label">Sun</span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Recent Reviews</h2>
          <div className="recent-reviews">
            <div className="review-item">
              <div className="review-dot approved" />
              <div className="review-info">
                <p className="review-name">Climate Data Archive</p>
                <p className="review-time">Approved • 2 days ago</p>
              </div>
            </div>
            <div className="review-item">
              <div className="review-dot rejected" />
              <div className="review-info">
                <p className="review-name">Random Dataset #123</p>
                <p className="review-time">Rejected • 3 days ago</p>
              </div>
            </div>
            <div className="review-item">
              <div className="review-dot approved" />
              <div className="review-info">
                <p className="review-name">Medical Imaging Set</p>
                <p className="review-time">Approved • 5 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CuratorPage;
