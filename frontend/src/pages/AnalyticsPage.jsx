import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../components/common/Card";
import StatCard from "../components/common/StatCard";
import "./AnalyticsPage.css";

const AnalyticsPage = () => {
  const categories = [
    { name: "Climate", count: 12, color: "#3b82f6" },
    { name: "Biology", count: 9, color: "#16a34a" },
    { name: "Healthcare", count: 8, color: "#dc2626" },
    { name: "Government", count: 7, color: "#9333ea" },
    { name: "History", count: 6, color: "#eab308" },
    { name: "Other", count: 5, color: "#6b7280" },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "Storage",
      amount: "$12,500",
      recipient: "Arweave Network",
      time: "2 hours ago",
      hash: "0x7a2f...3d8c",
    },
    {
      id: 2,
      type: "Grant",
      amount: "$8,500",
      recipient: "Marine Biology Inst.",
      time: "5 hours ago",
      hash: "0x9b4e...2a7f",
    },
    {
      id: 3,
      type: "Harvest",
      amount: "$48,750",
      recipient: "Yield Router",
      time: "1 day ago",
      hash: "0x3c7a...9e2b",
    },
  ];

  return (
    <div className="analytics-page">
      <h1 className="page-title">Protocol Analytics</h1>

      <div className="analytics-stats">
        <StatCard label="Total Impact" value="$487K" iconColor="#3b82f6" />
        <StatCard label="Avg. Cost per GB" value="$0.23" iconColor="#9333ea" />
        <StatCard label="Active Curators" value="24" iconColor="#ea580c" />
        <StatCard label="Proposal Success" value="73%" iconColor="#16a34a" />
      </div>

      <div className="analytics-grid">
        {/* Yield Distribution */}
        <Card>
          <h2 className="card-title">Yield Distribution</h2>
          <div className="distribution-list">
            <div className="distribution-item">
              <div className="distribution-info">
                <span className="distribution-label">
                  Storage Payments (60%)
                </span>
                <span className="distribution-amount">$29,250</span>
              </div>
              <div className="distribution-bar">
                <div
                  className="distribution-fill"
                  style={{ width: "60%", backgroundColor: "#3b82f6" }}
                />
              </div>
            </div>
            <div className="distribution-item">
              <div className="distribution-info">
                <span className="distribution-label">
                  Dataset Maintainers (30%)
                </span>
                <span className="distribution-amount">$14,625</span>
              </div>
              <div className="distribution-bar">
                <div
                  className="distribution-fill"
                  style={{ width: "30%", backgroundColor: "#16a34a" }}
                />
              </div>
            </div>
            <div className="distribution-item">
              <div className="distribution-info">
                <span className="distribution-label">Treasury (10%)</span>
                <span className="distribution-amount">$4,875</span>
              </div>
              <div className="distribution-bar">
                <div
                  className="distribution-fill"
                  style={{ width: "10%", backgroundColor: "#9333ea" }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Datasets by Category */}
        <Card>
          <h2 className="card-title">Datasets by Category</h2>
          <div className="category-list">
            {categories.map((category) => (
              <div key={category.name} className="category-item">
                <div className="category-info">
                  <div
                    className="category-dot"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="category-name">{category.name}</span>
                </div>
                <div className="category-metrics">
                  <div className="category-bar">
                    <div
                      className="category-fill"
                      style={{
                        width: `${(category.count / 12) * 100}%`,
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                  <span className="category-count">{category.count}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <h2 className="card-title">Recent Transactions</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Recipient</th>
                <th>Timestamp</th>
                <th>Tx Hash</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    <span className={`tx-type-badge ${tx.type.toLowerCase()}`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="tx-amount">{tx.amount}</td>
                  <td className="tx-recipient">{tx.recipient}</td>
                  <td className="tx-time">{tx.time}</td>
                  <td>
                    <a href="#" className="tx-hash">
                      {tx.hash}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Performance Metrics */}
      <div className="metrics-grid">
        <Card>
          <h3 className="metric-title">Monthly Growth</h3>
          <div className="metric-value-container">
            <span className="metric-large">+12.5%</span>
            <div className="metric-trend positive">
              <TrendingUp size={20} />
              <span>vs last month</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="metric-title">Storage Efficiency</h3>
          <div className="metric-value-container">
            <span className="metric-large">-8%</span>
            <div className="metric-trend positive">
              <TrendingDown size={20} />
              <span>cost reduction</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="metric-title">User Retention</h3>
          <div className="metric-value-container">
            <span className="metric-large">89%</span>
            <div className="metric-trend positive">
              <TrendingUp size={20} />
              <span>active users</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
